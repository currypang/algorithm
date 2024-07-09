function solution(elements) {
    const n = elements.length;
    const sums = new Set();

    // Extend the array to handle circular property easily
    const extendedElements = elements.concat(elements);

    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            let sum = 0;
            for (let i = 0; i < length; i++) {
                sum += extendedElements[start + i];
            }
            sums.add(sum);
        }
    }

    return sums.size;
}