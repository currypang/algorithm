function solution(n) {
    const MOD = 1234567;

    if (n === 2) return 1; // n이 2인 경우는 바로 리턴

    let fibo = new Array(n + 1);
    fibo[0] = 0;
    fibo[1] = 1;

    for (let i = 2; i <= n; i++) {
        fibo[i] = (fibo[i - 1] + fibo[i - 2]) % MOD;
    }

    return fibo[n];
}