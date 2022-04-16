function nelder_mead(f, X, accuracy, reflCoef, stretchCoef, comprCoef, limit) {
    let area = document.getElementsByTagName('textarea')[1];
    area.innerHTML = `Начало работы алгоритма\n\n`;

    let step = 1, error = 1;

    do {
        X.sort((p1, p2) => f(p1) - f(p2));

        let bestPoint = X[0].getClone();
            goodPoint = X[1].getClone();
            worstPoint = X[2].getClone();
        
        area.innerHTML += getText(X[0], step, f);
        let gravityCenter = findCenterOfGravity(goodPoint, bestPoint, limit);
        let reflectedPoint = reflection(worstPoint, gravityCenter, reflCoef, limit);

        if (f(bestPoint) <= f(reflectedPoint) && f(reflectedPoint) <= f(goodPoint)) {
            worstPoint = reflectedPoint;
            let newCenter = findCenterOfGravity(worstPoint, gravityCenter, limit);
            if (f(newCenter) < f(worstPoint)) worstPoint = newCenter;
        }

        else if (f(reflectedPoint) < f(bestPoint)) worstPoint = stretching(f, reflectedPoint, gravityCenter, stretchCoef, limit);

        else worstPoint = compression(f, reflectedPoint, worstPoint, gravityCenter, comprCoef, limit);

        step++;
        error = Math.sqrt((1 / 3) * (Math.pow(f(X[1]) - f(X[0]), 2) + Math.pow(f(X[2]) - f(X[0]), 2)));

        X = [worstPoint, goodPoint, bestPoint];
    } while (error > accuracy && step <= 100);

    if (step == 101) area.innerHTML += `Счетчик достиг максимума в 100 шагов. Вероятно, алгоритм расходится.\n`;
    area.innerHTML += getText(X[2], "*", f);
}

function addition(p1, p2) {
    if (p1.getCoordinates() == 4) return new Point([p1.x1 + p2.x1, p1.x2 + p2.x2, p1.x3 + p2.x3, p1.x4 + p2.x4]);
    else if (p1.getCoordinates() == 3) return new Point([p1.x1 + p2.x1, p1.x2 + p2.x2, p1.x3 + p2.x3]);
    return new Point([p1.x1 + p2.x1, p1.x2 + p2.x2]);
}

function subtraction(p1, p2) {
    if (p1.getCoordinates() == 4) return new Point([p1.x1 - p2.x1, p1.x2 - p2.x2, p1.x3 - p2.x3, p1.x4 - p2.x4]);
    else if (p1.getCoordinates() == 3) return new Point([p1.x1 - p2.x1, p1.x2 - p2.x2, p1.x3 - p2.x3]);
    return new Point([p1.x1 - p2.x1, p1.x2 - p2.x2]);
}

function multiplication(p, v) {
    if (p.getCoordinates() == 4) return new Point([p.x1 * v, p.x2 * v, p.x3 * v, p.x4 * v]);
    else if (p.getCoordinates() == 3) return new Point([p.x1 * v, p.x2 * v, p.x3 * v]);
    return new Point([p.x1 * v, p.x2 * v]);
}

function reflection(point, center, a, l) {
    let reflectedPoint = addition(center, multiplication(subtraction(center, point), a));
    if (l != undefined) {
        if (!checkByLimits(reflectedPoint, l)) return point;
    }
    return reflectedPoint;
}

function stretching(func, point, center, b, l) {
    let stretchedPoint = addition(center, multiplication(subtraction(point, center), b));
    if (l != undefined) {
        if (!checkByLimits(stretchedPoint, l)) return point;
    }
    if (func(stretchedPoint) < func(point)) return stretchedPoint;
    return point;
}

function compression(func, reflPoint, point, center, g, l) {
    let intermediatePoint;

    if (func(reflPoint) < func(point)) intermediatePoint = addition(center, multiplication(subtraction(reflPoint, center), g));
    else intermediatePoint = addition(center, multiplication(subtraction(point, center), g));

    if (l != undefined) {
        if (!checkByLimits(intermediatePoint, l)) return point;
    }

    if (func(intermediatePoint) < Math.min(func(point), func(reflPoint))) return intermediatePoint;
    return point;
}

function findCenterOfGravity(point1, point2) {
    return multiplication(addition(point1, point2), 0.5)
}