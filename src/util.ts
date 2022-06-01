export function generateEmptyArray<T>(size: number) {
    return [...new Array<T>(size)];
}

// return size1 * size2 2d array
export function generateRandom2dArray(size1: number, size2: number) {
    const arr = generateEmptyArray<number>(size1);
    // return arr.map(_ => generateEmptyArray<number>(size2).fill(0));
    // 0 ~ 0.01
    return arr.map(_ => generateEmptyArray<number>(size2).map(_ => Math.random() / 100));
}
