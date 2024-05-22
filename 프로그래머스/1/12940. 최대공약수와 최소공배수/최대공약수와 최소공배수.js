function solution(n, m) {
    let answer = [];
    answer[0] = 0;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(n % i ===0 && m % j === 0 && i ===j && i > answer[0]) {
                answer[0] = i
            }
        }
    }
    if(n >= m && n % m === 0 ) {
        answer[1] = n
    } else if (m > n && m % n === 0 ) {
        answer[1] = m
    } else {
         answer[1] = answer[0] * (n / answer[0]) * (m / answer[0])
    }
   
    return answer;
}