function solution(k, m, score) {
    let answer = 0;
    // 배열을 값이 내림차순으로 정렬
    score.sort(function(a, b)  {
    return b - a;
    });
    
    // m개씩 분리 시 박스 내 최소 점수는 분리된 배열의 마지막 인덱스.
    for (let i = 0; i + m <= score.length; i += m) {
        const min = score[i + m - 1];
        answer += min * m;
    }
    return answer;
}