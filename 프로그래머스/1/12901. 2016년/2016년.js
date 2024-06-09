function solution(a, b) {
    let answer = '';
    const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let sum = 0;
    for (let i = 0; i < a - 1; i++) {
        sum += daysOfMonth[i];
    }
    sum += b;
    answer = day[(sum - 1) % 7]
    return answer;
}