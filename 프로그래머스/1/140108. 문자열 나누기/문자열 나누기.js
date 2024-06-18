function solution(s) {
   let answer = 0;  
    let i = 0;  
    while (i < s.length) {
        let x = s[i];  
        let xCount = 0; 
        let otherCount = 0;  
        // 횟수가 같아질 때까지 반복
        while (i < s.length) {
            if (s[i] === x) {
                xCount++;  
            } else {
                otherCount++;  
            }
            i++;  
            
            if (xCount === otherCount) {
                break;
            }
        }
        answer++;  
    }
    
    return answer;  
}