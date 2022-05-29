import { trainImages } from './images';
import { generateEmptyArray } from './util';

const weight = generateEmptyArray<number>(28 * 28).fill(1);

const netpj = trainImages[0].image.reduce((sum, current, index) => {
    return sum + weight[index] * current;
}, 0);
