function solution(s) {
    let answer = [-1];
    for (let i = 1; i < s.length; i++) {
        let num  = -1
        for (let j = 0; j < i; j++) {
            if(s[i] === s[j]) {
                num = i - j
            }
        }
         answer.push(num)
  }
    return answer;
}