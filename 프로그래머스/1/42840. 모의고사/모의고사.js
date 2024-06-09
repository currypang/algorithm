function solution(answers) {
    let answer = [];
    // 찍는 패턴 설정
    let aPick = [1, 2, 3, 4, 5];
    let bPick = [2, 1, 2, 3, 2, 4, 2, 5];
    let cPick = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    // answer와 비교
    let points = [0, 0, 0];
    for(let i = 0; i < answers.length; i++) {
        if (answers[i] === aPick[i % 5]) {
            points[0] += 1;
        }
        if (answers[i] === bPick[i % 8]) {
            points[1] += 1;
        }
        if (answers[i] === cPick[i % 10]) {
            points[2] += 1;
        }
    }
    // 가장 많이 맞힌 사람 도출
    const maxNum = Math.max(...points)
    points.forEach((el, i) => {
        if(maxNum === el) {
            answer.push(i + 1);
        }
    })
    return answer;
}