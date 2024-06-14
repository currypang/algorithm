function solution(number, limit, power) {
    let answer = 0;

    for (let num = 1; num <= number; ++num) {
        let count = 0;
        const sqrt = Math.sqrt(num);

        for (let idx = 1; idx <= sqrt; ++idx) {
            if (num % idx === 0) {
                if (num / idx === idx) {
                    count += 1;
                } else {
                    count += 2;
                }
            }
        }

        if (count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    }

    return answer;
}