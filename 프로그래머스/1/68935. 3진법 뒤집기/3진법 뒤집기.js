function solution(n) {
  let answer = 0;
  let newNum = n.toString(3);
  let str = String(newNum).split('').reverse().join('');
  answer = +parseInt(str, 3).toString(10);

  return answer;
}