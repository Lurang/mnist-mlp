import { generateEmptyArray } from "./util";

export function sigmoid(x: number) {
    return 1 / (1 + Math.exp(-x));
}

export function sigmoidArray(x: number[]) {
    return x.map(input => sigmoid(input));
}

export function dSigmoid(x: number) {
    return sigmoid(x) * (1 - sigmoid(x));
}

export function softmax(logits: number[]) {
    const maxLogit = Math.max(...logits);
    const scores = logits.map(l => Math.exp(l - maxLogit));
    const denom = scores.reduce((a, b) => a + b);

    return scores.map(s => s / denom);
}

export function relu(x: number) {
    return Math.max(0, x);
}

export function predict(target: number) {
    const arr = generateEmptyArray<number>(10).fill(0);
    arr[target] = 1;

    return arr
}

export function crossEntropyError(output: number[], target: number[]) {
    const delta = 0.0000001; // 1e-7
    return output.reduce((sum, current, index) =>
        sum - target[index] * Math.log(current + delta)
    , 0);
}

export function MSE(output: number[], target: number[]) {
    return output.map((_, index) =>
        1 / 2 * ((target[index] - output[index]) ** 2)
    );
}
