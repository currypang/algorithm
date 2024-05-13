function solution(arr) {
  let answer = [];
  let min = arr[1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] < arr[j] && arr[i] < min) {
        min = arr[i];
      } else if (arr[j] < min) {
        min = arr[j];
      }
  }
  console.log(min);
  let newArr = arr.filter((element) => {
    if (element > min) {
      return element;
    }
  });
  if (newArr.length < 2) {
    answer = [-1];
  } else {
    answer = newArr;
  }

  return answer;
}

console.log(solution([4, 3, 2]));
