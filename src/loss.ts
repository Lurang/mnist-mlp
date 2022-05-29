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

// const a = [
//     0.7858382952908483,
//     0.781120836787831,
//     0.784249232385085,
//     0.7753951278880614,
//     0.7719111150678549,
//     0.7736594971253697,
//     0.7738955258572545,
//     0.798528150282469,
//     0.7696352118150711,
//     0.7767945867782355
// ];

// console.log(softmax(a));
