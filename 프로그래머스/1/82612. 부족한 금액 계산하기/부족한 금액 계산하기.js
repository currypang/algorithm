function solution(price, money, count) {
    let answer = 0;
    let totalPrice = 0;
    for(let i = 1; i <= count; i++) {
        totalPrice = totalPrice + (price * i);
    }
    answer = money - totalPrice;
    if(answer > 0) {
        answer = 0;
    }
    return Math.abs(answer)
}