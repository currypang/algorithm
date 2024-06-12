function solution(n, m, section) {
    let answer = 0;
    // 마지막 페인트 칠한 구역 설정
    let painted = 0
    // section을 탐색하며 칠하지 않은 구역 페인트 하고 카운트
    for(const wall of section) {
        if (wall > painted) {
            answer++;
            painted = wall + m - 1
        }
    }
    return answer;
}