function solution(brown, yellow) {
    const total = brown + yellow;
    
    for (let height = 3; height <= Math.sqrt(total); height++) {
        if (total % height === 0) {
            let width = total / height;
            if (2 * (width + height - 2) === brown) {
                return [width, height];
            }
        }
    }
    return [];
}