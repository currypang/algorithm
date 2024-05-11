function solution(phone_number) {
    let answer = '';
    arr = Array.from(phone_number)
    newArr = arr.slice(arr.length - 4, arr.length)
    for (let i = 0; i < arr.length - 4; i++) {
        answer = answer + "*"
    }
    for (const element of newArr) {
        answer = answer + element
    }
    return answer;
}