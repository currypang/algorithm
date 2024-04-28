function solution(n) {
    var answer = 0;
    var num = 0;
    for (i = 0; i < Math.floor(n/2); i++ ) {
        num = num + 2;
        answer = answer + num;
    }
    return answer;
}