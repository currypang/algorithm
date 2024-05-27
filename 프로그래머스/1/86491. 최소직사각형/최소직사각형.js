function solution(sizes) {
  let answer = 0;
  const newSizes = sizes.map((e) => {
    if (e[0] >= e[1]) {
      return e;
    } else {
      return [e[1], e[0]];
    }
  });
  let maxwidth = 0;
  let maxHeight = 0;
  for (let arr of newSizes) {
    if (arr[0] > maxwidth) {
      maxwidth = arr[0];
    }
  }
  for (let arr of newSizes) {
    if (arr[1] > maxHeight) {
      maxHeight = arr[1];
    }
  }
  answer = maxHeight * maxwidth;
  return answer;
}