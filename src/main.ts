import { trainImages } from './images';
import { predict, sigmoid } from './loss';
import { generateEmptyArray } from './util';

const HIDDEN_LAYER_NODE = 128;
const OUTPUT_LAYER_NODE = 10;

const weight = generateEmptyArray<number>(HIDDEN_LAYER_NODE).map(_ =>
    generateEmptyArray<number>(28 * 28).map(_ => Math.random() / 100)
);
const bios = generateEmptyArray<number>(HIDDEN_LAYER_NODE).map(_ =>
    generateEmptyArray<number>(28 * 28).map(_ => Math.random() / 100)
);

const weight2 = generateEmptyArray<number>(OUTPUT_LAYER_NODE).map(_ =>
    generateEmptyArray<number>(HIDDEN_LAYER_NODE).map(_ => Math.random() / 100)
);
const bios2 = generateEmptyArray<number>(OUTPUT_LAYER_NODE).map(_ =>
    generateEmptyArray<number>(HIDDEN_LAYER_NODE).map(_ => Math.random() / 100)
);

for (const input of trainImages) {
    const netpj = generateEmptyArray(HIDDEN_LAYER_NODE).map((_, i) => {
        const totalVal = input.image.reduce((sum, current, j) => {
            return sum + weight[i][j] * (current / 100000) + bios[i][j]; // downscale
        }, 0);

        return sigmoid(totalVal);
    });

    const netpk = generateEmptyArray(OUTPUT_LAYER_NODE).map((_, k) => {
        const totalVal = netpj.reduce((sum, current, j) => {
            return sum + current * weight2[k][j] + bios2[k][j];
        }, 0);

        return sigmoid(totalVal);
    })

    const target = predict(input.label);

    console.log(netpk);
}


// normalize 255로 나눔

// input은 784개 output은 10개

// hidden 1 256개

// hidden 2 128
