function solution(numbers) {
    let answer = 45;
    for(const element of numbers) {
        answer = answer - element
    }
    return answer;
}