function solution(s) {
  let answer = '';
  let arr = s.split('');
  let count = 0;

  for (let e of arr) {
    if (e === ' ') {
      count = 0;
      answer = answer + e;
      continue;
    } else if (count % 2 === 0) {
      answer = answer + e.toUpperCase();
      count++;
      continue;
    } else {
      answer = answer + e.toLowerCase();
      count++;
    }
  }

  return answer;
}