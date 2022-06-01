import { trainImages } from './images';
import { predict, sigmoid, softmax } from './loss';
import { generateEmptyArray } from './util';
import {
    INPUT_LAYER_NODE,
    HIDDEN_LAYER_NODE,
    HIDDEN_LAYER_NODE2,
    HIDDEN_LAYER_NODE3,
    OUTPUT_LAYER_NODE,
    layerInfo,
} from './var';

type ActivationFunction = (value: number) => number;

function forward(input: number[], node: number, w: number[][], b: number[][], af: ActivationFunction) {
    const layer = generateEmptyArray<number>(node).map((_, i) => {
        const totalVal = input.reduce((sum, current, j) =>
            sum + w[i][j] * current + b[i][j]
        , 0);

        return af(totalVal);
    });

    return layer;
}

for (const trainImage of trainImages) {
    const input = trainImage.image.map(x => x / 255); //downscale

    const h1 = layerInfo.HIDDEN_LAYER_NODE;
    const h1Output = forward(input, HIDDEN_LAYER_NODE, h1.w, h1.b, sigmoid);

    const h2 = layerInfo.HIDDEN_LAYER_NODE2;
    const h2Output = forward(h1Output, HIDDEN_LAYER_NODE2, h2.w, h2.b, sigmoid);

    const h3 = layerInfo.HIDDEN_LAYER_NODE3;
    const h3Output = forward(h2Output, HIDDEN_LAYER_NODE3, h3.w, h3.b, sigmoid);

    const target = predict(trainImage.label);
}
