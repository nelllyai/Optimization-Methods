function RosenbrockFunction(p) {
    return 100 * Math.pow((Math.pow(p.x1, 2) - p.x2), 2) + Math.pow((1 - p.x1), 2);
}

function fun(p) {
    return 100 * Math.pow((p.x2 - Math.pow(p.x1, 3)), 2) + Math.pow((1 - p.x1), 2);
}

let list = document.getElementsByTagName('ul');
let tests = document.getElementsByName('test');
let currentTest = document.querySelector('input[name="test"]:checked').value;
tests.forEach(function (test) {
    test.addEventListener('change', function () {
        currentTest = test.value;
    })
})

HJstart.onclick = function () {
    let Xfirst,
        d1 = +list[0].children[1].children[1].value,
        d2 = +list[0].children[2].children[1].value,
        e = +list[0].children[3].children[0].value,
        a = +list[0].children[4].children[0].value,
        h = +list[0].children[5].children[0].value;

    switch (currentTest) {
        case "Rosenbrock":
            Xfirst = new Point([-1.2, 1]),
            hooke_jeeves(RosenbrockFunction, Xfirst, d1, d2, e, a, h);
            break;
        case "somefunction":
            Xfirst = new Point([-1.2, -1]),
            hooke_jeeves(fun, Xfirst, d1, d2, e, a, h);
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
    }
}

function hooke_jeeves(f, X, delta1, delta2, eps, alpha, L) {
    let area = document.querySelector("textarea");
    area.innerHTML = `Начало работы алгоритма\n\n`;

    let error = 1, step = 1;

    do {
        area.innerHTML += `X${step} = (${X.x1.toFixed(3)}, ${X.x2.toFixed(3)}) Q${step} = ${f(X).toFixed(3)} | &#948;1 = ${delta1.toFixed(3)} &#948;2 = ${delta2.toFixed(3)}\n`;

        let check = false;

        let T1 = exploratorySearch(f, X, delta1, 1);
        if (T1.x1 == X.x1) check = true;

        let T2 = exploratorySearch(f, T1, delta2, 2);
        if (T2.x2 == X.x2) check = true;

        Xnew = new Point(X.x1 + L * (T1.x1 - X.x1), X.x2 + L * (T1.x1 - X.x1));

        if (f(Xnew) < f(T2)) {
            X = Xnew;
        }
        else {
            X = T2;
        }

        if (check) {
            error = Math.sqrt(Math.pow(delta1, 2) + Math.pow(delta2, 2));
            delta1 /= alpha;
            delta2 /= alpha;
            check = false;
        }
        step++;
    } while (error > eps);

    area.innerHTML += `\nX* = (${X.x1.toFixed(3)}, ${X.x2.toFixed(3)})\nQ(X*) = ${f(X).toFixed(3)}`;
}

function exploratorySearch(f, X, d, n) {
    let intermediatePoint = new Point([X.x1, X.x2]);
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

    let step = 1, error = 1;

    do {
        X.sort((p1, p2) => f(p1) - f(p2));

        let bestPoint = new Point([X[0].x1, X[0].x2]),
            goodPoint = new Point([X[1].x1, X[1].x2]),
            worstPoint = new Point([X[2].x1, X[2].x2]);

        area.innerHTML += `X${step} = (${bestPoint.x1.toFixed(2)}, ${bestPoint.x2.toFixed(2)}) Q(X${step}) = ${f(bestPoint).toFixed(2)}\n`;

        let gravityCenter = findCenterOfGravity(goodPoint, bestPoint);
        let reflectedPoint = reflection(worstPoint, gravityCenter, alpha);

        if (f(bestPoint) <= f(reflectedPoint) && f(reflectedPoint) <= f(goodPoint)) {
            worstPoint = reflectedPoint;
            if (f(findCenterOfGravity(worstPoint, gravityCenter)) < f(worstPoint)) worstPoint = findCenterOfGravity(worstPoint, gravityCenter);
        }

        else if (f(reflectedPoint) < f(bestPoint)) worstPoint = stretching(f, reflectedPoint, gravityCenter, beta);

        else worstPoint = compression(f, reflectedPoint, worstPoint, gravityCenter, gamma);

        step++;
        error = Math.sqrt((1 / 3) * (Math.pow(f(X[1]) - f(X[0]), 2) + Math.pow(f(X[2]) - f(X[0]), 2)));

        X = [worstPoint, goodPoint, bestPoint];
    } while (error > eps);

    area.innerHTML += `\nX* = (${X[2].x1.toFixed(2)}, ${X[2].x2.toFixed(2)})\nQ(X*) = ${f(X[2]).toFixed(2)}`;
}

class Point {
    constructor(X) {
        for (let i = 0; i < X.length; i++) {
            this[`x${i + 1}`] = X[i];
        }
    }
}

function addition(p1, p2) {
    return new Point([p1.x1 + p2.x1, p1.x2 + p2.x2]);
}

function subtraction(p1, p2) {
    return new Point([p1.x1 - p2.x1, p1.x2 - p2.x2]);
}

function multiplication(p, v) {
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