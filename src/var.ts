import { generateEmptyArray, generateRandom2dArray } from "./util";

export const INPUT_LAYER_NODE = 28 * 28;
export const HIDDEN_LAYER_NODE = 128;
export const HIDDEN_LAYER_NODE2 = 128;
export const HIDDEN_LAYER_NODE3 = 64;
export const OUTPUT_LAYER_NODE = 10;
export const layerInfo = {
    INPUT_LAYER_NODE: {
        w: [[]],
        b: [[]],
    },
    HIDDEN_LAYER_NODE: {
        w: generateRandom2dArray(HIDDEN_LAYER_NODE, INPUT_LAYER_NODE),
        b: generateRandom2dArray(HIDDEN_LAYER_NODE, INPUT_LAYER_NODE),
    },
    HIDDEN_LAYER_NODE2: {
        w: generateRandom2dArray(HIDDEN_LAYER_NODE2, HIDDEN_LAYER_NODE),
        b: generateRandom2dArray(HIDDEN_LAYER_NODE2, HIDDEN_LAYER_NODE),
    },
    HIDDEN_LAYER_NODE3: {
        w: generateRandom2dArray(HIDDEN_LAYER_NODE3, HIDDEN_LAYER_NODE2),
        b: generateRandom2dArray(HIDDEN_LAYER_NODE3, HIDDEN_LAYER_NODE2),
    },
    OUTPUT_LAYER_NODE: {
        w: generateRandom2dArray(OUTPUT_LAYER_NODE, HIDDEN_LAYER_NODE3),
        b: generateRandom2dArray(OUTPUT_LAYER_NODE, HIDDEN_LAYER_NODE3),
    },
};

// Array of HIDDEN_LAYER_NODE * INPUT_LAYER_NODE
export const weight = generateEmptyArray<number>(HIDDEN_LAYER_NODE).map(_ =>
    generateEmptyArray<number>(28 * 28).map(_ => Math.random() / 100)
);
export const bios = generateEmptyArray<number>(HIDDEN_LAYER_NODE).map(_ =>
    generateEmptyArray<number>(28 * 28).map(_ => Math.random() / 100)
);

// Array of OUTPUT_LAYER_NODE * HIDDEN_LAYER_NODE
export const weight2 = generateEmptyArray<number>(OUTPUT_LAYER_NODE).map(_ =>
    generateEmptyArray<number>(HIDDEN_LAYER_NODE).map(_ => Math.random() / 100)
);
export const bios2 = generateEmptyArray<number>(OUTPUT_LAYER_NODE).map(_ =>
    generateEmptyArray<number>(HIDDEN_LAYER_NODE).map(_ => Math.random() / 100)
);
