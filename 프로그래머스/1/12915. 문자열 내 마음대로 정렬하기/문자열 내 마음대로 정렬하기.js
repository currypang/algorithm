function solution(strings, n) {
    let answer = [];
    let tempArr = [];
    for (i = 0; i < strings.length; i++) {
        // 인덱스 n번째 문자를 단어 앞에 붙이기
        let addN = `${strings[i].substr(n ,1)}${strings[i]}` 
        tempArr.push(addN);
    }
    // 알파벳 순으로 분류
    tempArr = tempArr.sort();
    for (i = 0; i < strings.length; i++) {
       let str = tempArr[i].substr(1, tempArr[i].length - 1);
       answer.push(str);
    }
    return answer;
}