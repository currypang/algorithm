function solution(x) {
  let answer = true;
  let num = 0;
  x.toString()
    .split("")
    .forEach((element) => {
      num = num + Number(element);
    });
    if(!(x % num)) {
        answer = true;
    } else { 
        answer = false;
    }
  return answer;
}