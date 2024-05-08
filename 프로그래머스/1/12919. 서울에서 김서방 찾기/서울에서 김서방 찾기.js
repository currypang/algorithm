function solution(seoul) {
    let answer = '김서방';
    let num = 0;
    seoul.forEach((element, index) => {
        if(element === "Kim") {
            num = index; 
        }
    })
    return `${answer}은 ${num}에 있다`;
}