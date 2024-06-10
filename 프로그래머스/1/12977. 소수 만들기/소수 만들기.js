function solution(nums) {
  let answer = 0;

  // nums의 숫자들 중 3개를 골라 더하기
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        let isPrime = true;
        // 합산한 수가 소수인지 확인
        for (let l = 2; l <= Math.sqrt(sum); l++) {
          if (sum % l === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          answer++;
        }
      }
    }
  }
  return answer;
}
