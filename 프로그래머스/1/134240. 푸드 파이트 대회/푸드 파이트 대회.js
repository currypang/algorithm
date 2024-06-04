function solution(food) {
  let left = [];
  let right = [];
  
  for (let i = 1; i < food.length; i++) {
    let count = Math.floor(food[i] / 2);
    let str = String(i).repeat(count);
    left.push(str);
    right.unshift(str); 
  }
    
  return left.join('') + "0" + right.join('');
}