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

    getClone() {
        if (this.getCoordinates() == 2) return new Point([this.x1, this.x2]);
        else return new Point([this.x1, this.x2, this.x3, this.x4]);
    }
}

function rosenbrockFunction(p) {
    return 100 * Math.pow((Math.pow(p.x1, 2) - p.x2), 2) + Math.pow((1 - p.x1), 2);
}

function fun(p) {
    return 100 * Math.pow((p.x2 - Math.pow(p.x1, 3)), 2) + Math.pow((1 - p.x1), 2);
}

function four(p) {
    return Math.pow((p.x1 + 10 * p.x2), 2) + 5 * Math.pow((p.x3 - p.x4), 2) + Math.pow((p.x2 - 2 * p.x3), 4) + 10 * Math.pow((p.x1 - p.x4), 4);
}

function matr(p) {
    return 2 * Math.pow(p.x1, 2) + 2 * Math.pow(p.x2, 2) + 2 * Math.pow(p.x3, 2) - 2 * p.x1 * p.x2 - 2 * p.x2 * p.x3 + p.x3;
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

            case "limit":
                list[0].children[0].innerHTML = "X<sup>0</sup> = (-1.2, 1)";
                list[0].children[1].children[1].value = "1";
                list[0].children[2].children[1].value = "1";
                list[0].children[3].children[1].value = "0";
                list[0].children[4].children[1].value = "0";
                list[0].children[5].children[0].value = "0.1";
                list[0].children[6].children[0].value = "2";
                list[0].children[7].children[0].value = "1";

                list[1].children[0].innerHTML = "X<sup>0</sup> = (-1.2, 1)";
                list[1].children[1].innerHTML = "X<sup>0</sup> = (-0.2, 1)";
                list[1].children[2].innerHTML = "X<sup>0</sup> = (-1.2, 2)";
                list[1].children[3].children[0].value = "0.01";
                list[1].children[4].children[0].value = "1";
                list[1].children[5].children[0].value = "3";
                list[1].children[6].children[0].value = "0.5";
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

                list[1].children[0].innerHTML = "X<sup>0</sup> = (3, -1, 0, 1)";
                list[1].children[1].innerHTML = "X<sup>0</sup> = (4, -1, 0, 1)";
                list[1].children[2].innerHTML = "X<sup>0</sup> = (3, 0, 0, 1)";
                list[1].children[3].children[0].value = "0.01";
                list[1].children[4].children[0].value = "1";
                list[1].children[5].children[0].value = "2";
                list[1].children[6].children[0].value = "0.5";
                break;

            case "matrix":
                list[0].children[0].innerHTML = "X<sup>0</sup> = (-1.2, 1, 0)";
                list[0].children[1].children[1].value = "1";
                list[0].children[2].children[1].value = "1";
                list[0].children[3].children[1].value = "1";
                list[0].children[4].children[1].value = "0";
                list[0].children[5].children[0].value = "0.1";
                list[0].children[6].children[0].value = "2";
                list[0].children[7].children[0].value = "1";

                list[1].children[0].innerHTML = "X<sup>0</sup> = (-1.2, 1, 0)";
                list[1].children[1].innerHTML = "X<sup>0</sup> = (-0.2, 1, 0)";
                list[1].children[2].innerHTML = "X<sup>0</sup> = (-1.2, 2, 0)";
                list[1].children[3].children[0].value = "0.01";
                list[1].children[4].children[0].value = "1";
                list[1].children[5].children[0].value = "3";
                list[1].children[6].children[0].value = "0.5";
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
            hooke_jeeves(rosenbrockFunction, Xfirst, [d1, d2], e, a, h);
            break;
        case "somefunction":
            Xfirst = new Point([-1.2, -1]),
            hooke_jeeves(fun, Xfirst, [d1, d2], e, a, h);
            break;
        case "limit":
            Xfirst = new Point([-1.2, 1]),
            hooke_jeeves(fun, Xfirst, [d1, d2], e, a, h, [-1.2, 1, -1, 1]);
            break;
        case "coordinates":
            Xfirst =  new Point([3, -1, 0, 1]);
            hooke_jeeves(four, Xfirst, [d1, d2, d3, d4], e, a, h);
            break;
        case "matrix":
            Xfirst =  new Point([-1.2, 1, 0]);
            hooke_jeeves(matr, Xfirst, [d1, d2, d3, d4], e, a, h);
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
            nelder_mead(rosenbrockFunction, startingPoints, e, a, b, g);
            break;
        case "somefunction":
            startingPoints = [new Point([-1.2, -1]), new Point([-0.2, 1]), new Point([-1.2, 0])],
            nelder_mead(fun, startingPoints, e, a, b, g);
            break;
        case "limit":
            startingPoints = [new Point([-1.2, 1]), new Point([-0.2, 1]), new Point([-1.2, 2])],
            nelder_mead(fun, startingPoints, e, a, b, g, [-1.2, 1, -1, 1]);
            break;
        case "coordinates":
            startingPoints = [new Point([3, -1, 0, 1]), new Point([4, -1, 0, 1]), new Point([3, 0, 0, 1])],
            nelder_mead(four, startingPoints, e, a, b, g);
            break;
        case "matrix":
            startingPoints = [new Point([-1.2, 1, 0]), new Point([-0.2, 1, 0]), new Point([-1.2, 2, 0])],
            nelder_mead(matr, startingPoints, e, a, b, g);
            break;
    }
}

function checkByLimitX(X, l) {
    if (X.x1 < l[0] || X.x1 > l[1]) return false;
    return true;
}

function checkByLimitY(X, l) {
    if (X.x2 < l[0] || X.x2 > l[1]) return false;
    return true;
}

function checkByLimits(X, l) {
    if (l != undefined) {
        if (!checkByLimitX(X, l) || !checkByLimitY(X, l)) return false;
    }
    return true;
}

function getText(X, k, f) {
    let coordinates = X.getCoordinates();
    if (k == "*") {
        let string = `\nX* = (`;
        for (let i = 1; i < coordinates; i++) {
            string += `${X[`x${i}`].toFixed(3)}, `;
        }
        string += `${X[`x${coordinates}`].toFixed(3)})\nQ* = ${f(X).toFixed(3)}`;
        return string;
    }
    let string = `X${k} = (`;
    for (let i = 1; i < coordinates; i++) {
        string += `${X[`x${i}`].toFixed(3)}, `;
    }
    string += `${X[`x${coordinates}`].toFixed(3)}) Q${k} = ${f(X).toFixed(3)}\n`;
    return string;
}