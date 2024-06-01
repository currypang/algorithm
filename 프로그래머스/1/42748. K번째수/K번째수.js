function solution(array, commands) {
    let answer = [];
    answer = commands.map(el => {
        let arr = array.slice(el[0] - 1, el[1]);
        arr.sort((a, b) => a - b);
        return arr[el[2] -1];
    })
    return answer;
}