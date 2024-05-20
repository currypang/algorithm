function solution(s) {
    let answer = ''
    let arr = s.split('');
    arr.sort().reverse();
    answer = arr.join('');
    return answer;
}