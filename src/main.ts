import { trainImages } from './images';
import { MSE, predict, sigmoidArray, softmax } from './loss';
import { generateEmptyArray } from './util';
import {
    INPUT_LAYER_NODE,
    HIDDEN_LAYER_NODE,
    HIDDEN_LAYER_NODE2,
    HIDDEN_LAYER_NODE3,
    OUTPUT_LAYER_NODE,
    layerInfo,
} from './var';

type ActivationFunction = (x: number[]) => number[];

function forward(input: number[], node: number, w: number[][], b: number[][], af: ActivationFunction) {
    const layer = generateEmptyArray<number>(node).map((_, i) => {
        const totalVal = input.reduce((sum, current, j) =>
            sum + w[i][j] * current + b[i][j]
        , 0);

        return totalVal;
    });

    return af(layer);
}

const epoch = 30;
const errors = [];

for (const trainImage of trainImages) {
    const input = trainImage.image.map(x => x / 255); //downscale

    const h1 = layerInfo.HIDDEN_LAYER_NODE;
    const h1Output = forward(input, HIDDEN_LAYER_NODE, h1.w, h1.b, sigmoidArray);

    const h2 = layerInfo.HIDDEN_LAYER_NODE2;
    const h2Output = forward(h1Output, HIDDEN_LAYER_NODE2, h2.w, h2.b, sigmoidArray);

    const h3 = layerInfo.HIDDEN_LAYER_NODE3;
    const h3Output = forward(h2Output, HIDDEN_LAYER_NODE3, h3.w, h3.b, sigmoidArray);

    const o = layerInfo.OUTPUT_LAYER_NODE;
    const output = forward(h3Output, OUTPUT_LAYER_NODE, o.w, o.b ,softmax);
    const target = predict(trainImage.label);

    const error = MSE(output, target);
    errors.push(error);
}
