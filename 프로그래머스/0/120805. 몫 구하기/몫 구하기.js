function solution(num1, num2) {
    var answer = 0;
    let remain = num1 % num2;
    answer = (num1 - remain) / num2;
    return answer;
}