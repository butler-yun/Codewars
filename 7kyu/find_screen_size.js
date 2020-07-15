function findScreenHeight(width, ratio) {
    // Happy coding :)
    const ratioArr = ratio.split(':');
    const hSize = width * ratioArr[1] / ratioArr[0];

    return `${width}x${hSize}`;
}