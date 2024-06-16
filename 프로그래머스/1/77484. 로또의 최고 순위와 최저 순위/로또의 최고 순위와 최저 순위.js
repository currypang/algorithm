function solution(lottos, win_nums) {
    let answer = [];
    const rank = [6, 6, 5, 4, 3, 2, 1]; 
    
    let minMatch = 0; 
    let zeros = 0; 
    
    // 당첨 번호와 일치하는 개수, 0의 개수세기
    lottos.forEach(num => {
        if (win_nums.includes(num)) {
            minMatch++;
        } else if (num === 0) {
            zeros++;
        }
    });
    const maxMatch = minMatch + zeros;
    answer = [rank[maxMatch], rank[minMatch]];
    
    return answer;
}