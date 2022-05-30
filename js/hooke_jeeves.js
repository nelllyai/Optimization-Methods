function hooke_jeeves(f, X, increments, accuracy, coef, L, limit) {
    let area = document.querySelector("textarea");
    area.innerHTML = `Начало работы алгоритма\n\n`;

    let error = 1, step = 1, coordinates = X.getCoordinates();

    do {
        area.innerHTML += getText(X, step, f);
        let mistake = 0;
        let shiftByCoordinate = [];

        for (let i = 0; i < coordinates; i++) {
            shiftByCoordinate.push(exploratorySearch(f, X, increments[i], i + 1));
            if (!checkByLimits(shiftByCoordinate[i], limit)) shiftByCoordinate[i] = X.getClone();
            if (shiftByCoordinate[i][`x${i + 1}`] == X[`x${i + 1}`]) mistake++;
        }

        if (mistake == coordinates) {
            let sum = 0;
            for (let i = 0; i < coordinates; i++) sum += Math.pow(increments[i], 2);
            error = Math.sqrt(sum);
            for (let i = 0; i < coordinates; i++) increments[i] /= coef;
        }
        else X = sampleSearch(X, shiftByCoordinate, L);

        step++;
    } while (error > accuracy && step <= 7000);

    if (step == 1001) area.innerHTML += `\nСчетчик достиг максимума в 1000 шагов. Вероятно, алгоритм расходится.`;
    area.innerHTML += getText(X, "*", f);
}

function exploratorySearch(f, X, d, n) {
    let intermediatePoint = X.getClone();
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
    else if (coordinates == 3) return new Point([X.x1 + L * (T[0].x1 - X.x1), X.x2 + L * (T[1].x2 - X.x2), X.x3 + L * (T[2].x3 - X.x3)]);
    return new Point([X.x1 + L * (T[0].x1 - X.x1), X.x2 + L * (T[1].x2 - X.x2),
                      X.x3 + L * (T[2].x3 - X.x3), X.x4 + L * (T[3].x4 - X.x4)]);
}