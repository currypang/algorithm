function solution(food) {
    let answer = '';
    let left = [];
    let right = [];
    const arr = food.map((el) => {
        if(el > 1 && el % 2) {
            return el - 1;
        } 
        if (el > 1 && !(el % 2)) {
            return el;
        }
         
    })
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i]/2; j++) {
            left.push(i);
        }
    }
  right = [...left].reverse()
    answer = [...left, 0, ...right].join("")
    return answer;
}