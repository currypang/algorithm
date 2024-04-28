function solution(arr) {
    var answer = 0;
    let i = 0;
    while (i < arr.length) {
           answer += arr[i];
           i++;
           }
    return answer / arr.length;
}