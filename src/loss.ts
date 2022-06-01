import { generateEmptyArray } from "./util";

export function sigmoid(x: number) {
    return 1 / (1 + Math.exp(-x));
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

export function predict(target: number) {
    const arr = generateEmptyArray<number>(10).fill(0);
    arr[target] = 1;

    return arr
}
