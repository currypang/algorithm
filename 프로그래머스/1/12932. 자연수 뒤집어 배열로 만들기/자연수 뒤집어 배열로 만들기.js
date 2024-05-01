function solution(n) {
  let answer = [];
  let numToString = String(n);
  numToString.split("").forEach((element) => {
    answer.push(Number(element));
  });
  return answer.reverse();
}