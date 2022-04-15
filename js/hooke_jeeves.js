function hooke_jeeves(f, X, increments, eps, coef, L, limit) {
    let area = document.querySelector("textarea");
    area.innerHTML = `Начало работы алгоритма\n\n`;

    let error = 1, step = 1, coordinates = X.getCoordinates();

    do {
        area.innerHTML += getText(X, step, f);
        let mistake = 0;
        let shiftByCoordinate = [];

        for (let i = 0; i < coordinates; i++) {
            shiftByCoordinate.push(exploratorySearch(f, X, increments[i], i + 1, coordinates));
            if (!checkByLimits(shiftByCoordinate[i], limit)) shiftByCoordinate[i] = X.getClone();
            if (shiftByCoordinate[i][`x${i + 1}`] == X[`x${i + 1}`]) mistake++;
        }

        if (mistake == coordinates) {
            let sum = 0;
            for (let i = 0; i < coordinates; i++) sum += Math.pow(increments[i], 2);
            error = Math.sqrt(sum);
            for (let i = 0; i < coordinates; i++) increments[i] /= coef;
            check = false;
        }
        else X = sampleSearch(X, shiftByCoordinate, L);

        step++;
    } while (error > eps && step <= 100);

    if (step == 101) area.innerHTML += `\nСчетчик достиг максимума в 100 шагов. Вероятно, алгоритм расходится.`;
    area.innerHTML += getText(X, "*", f);
}

function exploratorySearch(f, X, d, n, c) {
    let intermediatePoint;
    if (c == 2) intermediatePoint = new Point([X.x1, X.x2]);
    else if (c == 4) intermediatePoint = new Point([X.x1, X.x2, X.x3, X.x4]);
    intermediatePoint[`x${n}`] += d;

    if (f(intermediatePoint) < f(X)) return intermediatePoint;
    else {
        intermediatePoint[`x${n}`] -= 2 * d;
        if (f(intermediatePoint) < f(X)) return intermediatePoint;
        return X;
    }
}

function sampleSearch(X, T, L) {
    let coordinates = T[0].getCoordinates();
    if (coordinates == 2) return new Point([X.x1 + L * (T[0].x1 - X.x1), X.x2 + L * (T[1].x2 - X.x2)]);
    return new Point([X.x1 + L * (T[0].x1 - X.x1), X.x2 + L * (T[1].x2 - X.x2),
                      X.x3 + L * (T[2].x3 - X.x3), X.x4 + L * (T[3].x4 - X.x4)]);
}