
function sigmoid(x: number) {
    return 1 / (1 + Math.pow(Math.E, -x));
}

function dSigmoid(x: number) {
    return sigmoid(x) * (1 - sigmoid(x));
}
