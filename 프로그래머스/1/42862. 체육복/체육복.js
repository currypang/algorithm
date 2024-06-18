function solution(n, lost, reserve) {
    // 여벌 체육복이 있는 학생 중 도난당한 학생을 제외
    let realReserve = reserve.filter(r => !lost.includes(r));
    let realLost = lost.filter(l => !reserve.includes(l));

    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);

    // 체육복 빌려주기
    realLost = realLost.filter(lostStudent => {
        for (let i = 0; i < realReserve.length; i++) {
            if (Math.abs(realReserve[i] - lostStudent) === 1) {
                realReserve.splice(i, 1);
                return false;
            }
        }
        return true;
    });

    // 최대로 체육수업을 들을 수 있는 학생 수를 계산
    return n - realLost.length;
}
