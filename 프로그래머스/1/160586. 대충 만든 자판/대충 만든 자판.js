function solution(keymap, targets) {
    let answer = []
    let charToMinPresses = {};

    for (let i = 0; i < keymap.length; i++) {
        let keys = keymap[i];
        for (let j = 0; j < keys.length; j++) {
            let char = keys[j];
            if (!charToMinPresses[char] || charToMinPresses[char] > j + 1) {
                charToMinPresses[char] = j + 1;
            }
        }
    }

    let result = [];

    for (let target of targets) {
        let totalPresses = 0;
        for (let char of target) {
            if (charToMinPresses[char]) {
                totalPresses += charToMinPresses[char];
            } else {
                totalPresses = -1;
                break;
            }
        }
        answer.push(totalPresses);
    }

    return answer;
}