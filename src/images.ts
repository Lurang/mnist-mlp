import * as fs from 'fs';
import { generateEmptyArray } from './util';

// http://yann.lecun.com/exdb/mnist/
const dataFileBuffer = fs.readFileSync('./data/train-images-idx3-ubyte');
const labelFileBuffer = fs.readFileSync('./data/train-labels-idx1-ubyte');

interface Image {
    // 28 * 28
    image: number[];
    label: number;
}

export const trainImages = generateEmptyArray(20000).map<Image>((_, index) => {
    // [offset] [type]          [value]          [description]
    // 0000     32 bit integer  0x00000803(2051) magic number
    // 0004     32 bit integer  60000            number of images
    // 0008     32 bit integer  28               number of rows
    // 0012     32 bit integer  28               number of columns
    // 0016     unsigned byte   ??               pixel
    // 0017     unsigned byte   ??               pixel
    // ........
    // xxxx     unsigned byte   ??               pixel
    // The images were centered in a 28x28 image by computing the center of mass of the pixels,
    // and translating the image so as to position this point at the center of the 28x28 field
    const imagePixels = generateEmptyArray(28 * 28).map<number>((_, x) => {
        // index번째 이미지 시작지점, 첫 16번째 byte까지는 위에 정의된 값들임
        const imageStartIndex = index * 28 * 28 + 16;

        return dataFileBuffer[imageStartIndex + x];
    });

    // 0000     32 bit integer  0x00000801(2049) magic number (MSB first)
    // 0004     32 bit integer  60000            number of items
    // 0008     unsigned byte   ??               label
    // ........
    // xxxx     unsigned byte   ??               label
    return {
        image: imagePixels,
        // index 8번쨰 byte이후부터 Label넘버
        label: labelFileBuffer[index + 8],
    };
});


// ysbae@tukorea.ac.kr
