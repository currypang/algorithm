function solution(s) {
    let answer = '';
    let halfLength = s.length / 2;
    if (s.length % 2 === 0) {
        answer = s.slice(halfLength - 1, halfLength +1)
    } else {
        answer = s[Math.floor(halfLength)]
    }
    return answer;
}