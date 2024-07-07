function solution(n) {
    let answer = 0;
    const MOD = 1234567;
    if (n <= 1) return 1;

    let prev1 = 1;
    let prev2 = 1;
   

    for (let i = 2; i <= n; i++) {
        current = (prev1 + prev2) % MOD;
        prev2 = prev1;
        prev1 = current;
    }

    return current;
}