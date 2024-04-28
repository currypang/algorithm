function solution(numbers) {
    var answer = 0;
    let num = 0;
    numbers.forEach((element) => {
        num = num + element;
        }
    )
    answer = num / numbers.length;
    return answer;
}