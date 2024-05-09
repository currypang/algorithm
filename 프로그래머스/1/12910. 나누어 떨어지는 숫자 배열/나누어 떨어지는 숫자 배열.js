function solution(arr, divisor) {
    let answer = [];
    let newArr = [];
    for(const element of arr) {
        if(!(element % divisor)) {
            newArr.push(element);
        }
    }
    if (newArr.length) {
       answer = newArr.sort(function(a, b) {
        return a - b;
    })
    }
    else {
        newArr.push(-1);
        answer = newArr;
    }
    return answer;
}