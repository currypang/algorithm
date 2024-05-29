function solution(s) {
  let answer = s;
  const word = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (const key in word) {
    while (answer.includes(key)) {
      answer = answer.replace(key, word[key]);
    }
  }

  return Number(answer);
}