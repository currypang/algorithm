function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let charCode = s[i].charCodeAt();
    let shiftedCode = 0
    
    if (s[i] >= "A" && s[i] <= "Z") {
      shiftedCode = ((charCode - 65 + n) % 26) + 65;
    } else {
      shiftedCode = ((charCode - 97 + n) % 26) + 97;
    }
    
    answer += String.fromCharCode(shiftedCode);
  }
  return answer;
}