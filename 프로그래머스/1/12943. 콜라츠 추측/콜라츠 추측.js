function solution(num) {
    let answer = -1;
    newNum = num;
    count = 0;
    for (let i = 0; i < 500; i++) {
        if (newNum === 1) {
            answer = count;
            break;
        }
        else if (newNum % 2) {
            newNum = (newNum * 3) + 1;
            count++;   
        } else {
            newNum = newNum / 2;
            count++
        }
    }   
    return answer;
}