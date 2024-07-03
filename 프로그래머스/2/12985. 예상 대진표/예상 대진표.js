function solution(N, A, B) {
    let round = 1;
    
    while (true) {
        A = Math.ceil(A / 2);
        B = Math.ceil(B / 2);

        if (A === B) {
            return round;
        }

        round++;
    }
}