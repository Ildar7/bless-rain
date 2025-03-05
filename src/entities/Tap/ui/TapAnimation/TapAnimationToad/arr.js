const flat = function (arr, n) {
    const changedArr = [];

    for (let i = 0; i < arr.length; i++) {
        const currentElem = arr[i];

        if (Array.isArray(currentElem) && n > 0) {
            const flattedArr = flat(currentElem, n - 1);
            changedArr.push(...flattedArr);
        } else {
            changedArr.push(currentElem);
        }
    }

    return changedArr;
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));
console.log([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]].flat(0));
