class Point {
    constructor(X) {
        for (let i = 0; i < X.length; i++) {
            this[`x${i + 1}`] = X[i];
        }
    }

    getCoordinates() {
        let counter = 0;
        do {
            counter++;
        } while (this[`x${counter + 1}`] != undefined);

        return counter;
    }
}

function RosenbrockFunction(p) {
    return 100 * Math.pow((Math.pow(p.x1, 2) - p.x2), 2) + Math.pow((1 - p.x1), 2);
}

function fun(p) {
    return 100 * Math.pow((p.x2 - Math.pow(p.x1, 3)), 2) + Math.pow((1 - p.x1), 2);
}

function four(p) {
    return Math.pow((p.x1 + 10 * p.x2), 2) + 5 * Math.pow((p.x3 - p.x4), 2) + Math.pow((p.x2 - 2 * p.x3), 4) + 10 * Math.pow((p.x1 - p.x4), 4);
}

let list = document.getElementsByTagName('ul');
let tests = document.getElementsByName('test');
let currentTest = document.querySelector('input[name="test"]:checked').value;
tests.forEach(function (test) {
    test.addEventListener('change', function () {
        currentTest = test.value;
        switch (currentTest) {
            case "Rosenbrock":
                list[0].children[0].innerHTML = "X<sup>0</sup> = (-1.2, 1)";
                list[0].children[1].children[1].value = "2.3";
                list[0].children[2].children[1].value = "1";
                list[0].children[3].children[1].value = "0";
                list[0].children[4].children[1].value = "0";
                list[0].children[5].children[0].value = "0.001";
                list[0].children[6].children[0].value = "2";
                list[0].children[7].children[0].value = "1";


                list[1].children[0].innerHTML = "X<sup>0</sup> = (-1.2, 1)";
                list[1].children[1].innerHTML = "X<sup>0</sup> = (-0.2, 1)";
                list[1].children[2].innerHTML = "X<sup>0</sup> = (-1.2, 2)";
                list[1].children[3].children[0].value = "0.0001";
                list[1].children[4].children[0].value = "1";
                list[1].children[5].children[0].value = "3";
                list[1].children[6].children[0].value = "0.3";
                break;

            case "somefunction":
                list[0].children[0].innerHTML = "X<sup>0</sup> = (-1.2, -1)";
                list[0].children[1].children[1].value = "1";
                list[0].children[2].children[1].value = "1";
                list[0].children[3].children[1].value = "0";
                list[0].children[4].children[1].value = "0";
                list[0].children[5].children[0].value = "0.1";
                list[0].children[6].children[0].value = "2";
                list[0].children[7].children[0].value = "1";

                list[1].children[0].innerHTML = "X<sup>0</sup> = (-1.2, -1)";
                list[1].children[1].innerHTML = "X<sup>0</sup> = (-0.2, 1)";
                list[1].children[2].innerHTML = "X<sup>0</sup> = (-1.2, 0)";
                list[1].children[3].children[0].value = "0.01";
                list[1].children[4].children[0].value = "2";
                list[1].children[5].children[0].value = "2.3";
                list[1].children[6].children[0].value = "0.1";
                break;
            
            case "coordinates":
                list[0].children[0].innerHTML = "X<sup>0</sup> = (3, -1, 0, 1)";
                list[0].children[1].children[1].value = "1";
                list[0].children[2].children[1].value = "1";
                list[0].children[3].children[1].value = "1";
                list[0].children[4].children[1].value = "1";
                list[0].children[5].children[0].value = "0.1";
                list[0].children[6].children[0].value = "2";
                list[0].children[7].children[0].value = "1";

                list[1].children[0].innerHTML = "X<sup>0</sup> = (-1.2, -1)";
                list[1].children[1].innerHTML = "X<sup>0</sup> = (-0.2, 1)";
                list[1].children[2].innerHTML = "X<sup>0</sup> = (-1.2, 0)";
                list[1].children[3].children[0].value = "0.01";
                list[1].children[4].children[0].value = "2";
                list[1].children[5].children[0].value = "2.3";
                list[1].children[6].children[0].value = "0.1";
                break;
        }
    })
})

HJstart.onclick = function () {
    let Xfirst,
        d1 = +list[0].children[1].children[1].value,
        d2 = +list[0].children[2].children[1].value,
        d3 = +list[0].children[3].children[1].value,
        d4 = +list[0].children[4].children[1].value,
        e = +list[0].children[5].children[0].value,
        a = +list[0].children[6].children[0].value,
        h = +list[0].children[7].children[0].value;

    switch (currentTest) {
        case "Rosenbrock":
            Xfirst = new Point([-1.2, 1]),
            hooke_jeeves(RosenbrockFunction, Xfirst, [d1, d2], e, a, h);
            break;
        case "somefunction":
            Xfirst = new Point([-1.2, -1]),
            hooke_jeeves(fun, Xfirst, [d1, d2], e, a, h);
            break;
        case "limit":
            Xfirst = new Point([-1.2, 1]),
            hooke_jeeves(fun, Xfirst, [d1, d2], e, a, h);
            break;
        case "coordinates":
            Xfirst =  new Point([3, -1, 0, 1]);
            hooke_jeeves(four, Xfirst, [d1, d2, d3, d4], e, a, h);
            break;
    }
}

NMstart.onclick = function () {
    let startingPoints,
        e = +list[1].children[3].children[0].value,
        a = +list[1].children[4].children[0].value,
        b = +list[1].children[5].children[0].value,
        g = +list[1].children[6].children[0].value;


    switch (currentTest) {
        case "Rosenbrock":
            startingPoints = [new Point([-1.2, 1]), new Point([-0.2, 1]), new Point([-1.2, 2])],
            nelder_mead(RosenbrockFunction, startingPoints, e, a, b, g);
            break;
        case "somefunction":
            startingPoints = [new Point([-1.2, -1]), new Point([-0.2, 1]), new Point([-1.2, 0])],
            nelder_mead(fun, startingPoints, e, a, b, g);
            break;
        case "limit":
            startingPoints = [new Point([-1.2, 1]), new Point([-0.2, 1]), new Point([-1.2, 2])],
            nelder_mead(fun, startingPoints, e, a, b, g);
            break;
        case "coordinates":
            startingPoints = [new Point([3, -1, 0, 1]), new Point([4, -1, 0, 1]), new Point([3, 0, 0, 1])],
            nelder_mead(fun, startingPoints, e, a, b, g);
            break;
    }
}

function hooke_jeeves(f, X, increments, eps, coef, L) {
    let area = document.querySelector("textarea");
    area.innerHTML = `Начало работы алгоритма\n\n`;

    let error = 1, step = 1, coordinates = X.getCoordinates();

    do {
        if (coordinates == 2) area.innerHTML += `X${step} = (${X.x1.toFixed(3)}, ${X.x2.toFixed(3)}) Q${step} = ${f(X).toFixed(3)}\n`;
        else area.innerHTML += `X${step} = (${X.x1.toFixed(3)}, ${X.x2.toFixed(3)}, ${X.x3.toFixed(3)}, ${X.x4.toFixed(3)}) Q${step} = ${f(X).toFixed(3)}\n`;

        let mistake = 0, check = false;
        let shiftByCoordinate = [];

        for (let i = 0; i < coordinates; i++) {
            shiftByCoordinate.push(exploratorySearch(f, X, increments[i], i + 1, coordinates));
            if (shiftByCoordinate[i][`x${i + 1}`] == X[`x${i + 1}`]) mistake++;
        }
        if (mistake == coordinates) check = true;

        if (check) {
            let sum = 0;
            for (let i = 0; i < coordinates; i++) sum += Math.pow(increments[0], 2);
            error = Math.sqrt(sum);
            for (let i = 0; i < coordinates; i++) increments[i] /= coef;
            check = false;
        }
        else {
            if (coordinates == 2) X = new Point([X.x1 + L * (shiftByCoordinate[0].x1 - X.x1), X.x2 + L * (shiftByCoordinate[1].x2 - X.x2)]);
            else X = new Point([X.x1 + L * (shiftByCoordinate[0].x1 - X.x1), X.x2 + L * (shiftByCoordinate[1].x2 - X.x2),
                                X.x3 + L * (shiftByCoordinate[2].x3 - X.x3), X.x4 + L * (shiftByCoordinate[3].x4 - X.x4)]);
        }

        step++;
    } while (error > eps && step <= 100);

    if (step == 101) area.innerHTML += `\nСчетчик достиг максимума в 100 шагов. Вероятно, алгоритм расходится.`;
    if (increments.length == 2) area.innerHTML += `\nX* = (${X.x1.toFixed(3)}, ${X.x2.toFixed(3)})\nQ(X*) = ${f(X).toFixed(3)}`;
    else area.innerHTML += `\nX* = (${X.x1.toFixed(3)}, ${X.x2.toFixed(3)}, ${X.x3.toFixed(3)}, ${X.x4.toFixed(3)})\nQ(X*) = ${f(X).toFixed(3)}\n`;
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

function nelder_mead(f, X, eps, alpha, beta, gamma) {
    let area = document.getElementsByTagName('textarea')[1];
    area.innerHTML = `Начало работы алгоритма\n\n`;

    let step = 1, error = 1, coordinates = X[0].getCoordinates();

    do {
        X.sort((p1, p2) => f(p1) - f(p2));

        let bestPoint, goodPoint, worstPoint;

        if (coordinates == 2) {
            bestPoint = new Point([X[0].x1, X[0].x2]);
            goodPoint = new Point([X[1].x1, X[1].x2]);
            worstPoint = new Point([X[2].x1, X[2].x2]);
            area.innerHTML += `X${step} = (${bestPoint.x1.toFixed(2)}, ${bestPoint.x2.toFixed(2)}) Q(X${step}) = ${f(bestPoint).toFixed(2)}\n`;
        }
        else {
            bestPoint = new Point([X[0].x1, X[0].x2, X[0].x3, X[0].x4]);
            goodPoint = new Point([X[1].x1, X[1].x2, X[1].x3, X[1].x4]);
            worstPoint = new Point([X[2].x1, X[2].x2, X[2].x3, X[2].x4]);
            area.innerHTML += `X${step} = (${bestPoint.x1.toFixed(2)}, ${bestPoint.x2.toFixed(2)}, ${bestPoint.x3.toFixed(2)}, ${bestPoint.x4.toFixed(2)}) Q(X${step}) = ${f(bestPoint).toFixed(2)}\n`;
        }

        let gravityCenter = findCenterOfGravity(goodPoint, bestPoint, coordinates);
        let reflectedPoint = reflection(worstPoint, gravityCenter, alpha, coordinates);

        if (f(bestPoint) <= f(reflectedPoint) && f(reflectedPoint) <= f(goodPoint)) {
            worstPoint = reflectedPoint;
            if (f(findCenterOfGravity(worstPoint, gravityCenter, coordinates)) < f(worstPoint)) worstPoint = findCenterOfGravity(worstPoint, gravityCenter, coordinates);
        }

        else if (f(reflectedPoint) < f(bestPoint)) worstPoint = stretching(f, reflectedPoint, gravityCenter, beta, coordinates);

        else worstPoint = compression(f, reflectedPoint, worstPoint, gravityCenter, gamma);

        step++;
        error = Math.sqrt((1 / 3) * (Math.pow(f(X[1]) - f(X[0]), 2) + Math.pow(f(X[2]) - f(X[0]), 2)));

        X = [worstPoint, goodPoint, bestPoint];
    } while (error > eps && step <= 100);

    if (step == 101) area.innerHTML += `Счетчик достиг максимума в 100 шагов. Вероятно, алгоритм расходится.\n`;
    if (coordinates == 2) area.innerHTML += `\nX* = (${X[2].x1.toFixed(2)}, ${X[2].x2.toFixed(2)})\nQ(X*) = ${f(X[2]).toFixed(2)}`;
    else area.innerHTML += `\nX* = (${X[2].x1.toFixed(2)}, ${X[2].x2.toFixed(2)}, ${X[2].x3.toFixed(2)}, ${X[2].x4.toFixed(2)})\nQ(X*) = ${f(X[2]).toFixed(2)}`;
}

function addition(p1, p2) {
    if (p1.getCoordinates() == 4) return new Point([p1.x1 + p2.x1, p1.x2 + p2.x2, p1.x3 + p2.x3, p1.x4 + p2.x4]);
    return new Point([p1.x1 + p2.x1, p1.x2 + p2.x2]);
}

function subtraction(p1, p2) {
    if (p1.getCoordinates() == 4) return new Point([p1.x1 - p2.x1, p1.x2 - p2.x2, p1.x3 - p2.x3, p1.x4 - p2.x4]);
    return new Point([p1.x1 - p2.x1, p1.x2 - p2.x2]);
}

function multiplication(p, v) {
    if (p.getCoordinates() == 4) return new Point([p.x1 * v, p.x2 * v, p.x3 * v, p.x4 * v]);
    return new Point([p.x1 * v, p.x2 * v]);
}

function reflection(point, center, a) {
    return addition(center, multiplication(subtraction(center, point), a));
}

function stretching(func, point, center, b) {
    let V = addition(center, multiplication(subtraction(point, center), b));
    if (func(V) < func(point)) return V;
    else return point;
}

function compression(func, reflPoint, point, center, g) {
    let intermediatePoint;

    if (func(reflPoint) < func(point)) intermediatePoint = addition(center, multiplication(subtraction(reflPoint, center), g));
    else intermediatePoint = addition(center, multiplication(subtraction(point, center), g));

    if (func(intermediatePoint) < Math.min(func(point), func(reflPoint))) return intermediatePoint;
    return point;
}

function findCenterOfGravity(point1, point2) {
    return multiplication(addition(point1, point2), 0.5)
}