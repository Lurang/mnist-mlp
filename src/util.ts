export function generateEmptyArray<T>(size: number) {
    return [...new Array<T>(size)];
}
