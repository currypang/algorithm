function solution(s) {
    let answer = true;
    if (s.length !== 4 && s.length !== 6) {
        answer = false;
    }
    if (s.includes("e") || isNaN(Number(s))) {
    answer = false;
    
    }
    return answer;
}