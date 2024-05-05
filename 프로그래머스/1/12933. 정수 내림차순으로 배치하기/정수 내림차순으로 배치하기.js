function solution(n) {
  let answer = 0;
  let arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] >= arr[j]) {
        continue;
      } else {
        let max = arr[j];
        let min = arr[i];
        arr[i] = max;
        arr[j] = min;
      }
    }
  }
  let str = "";
  arr.forEach((element) => {
    str = str + element.toString();
  });
  answer = Number(str);
  return answer;
}