function solution(s) {
  let arr = s.split(" ");
  arr.sort((a, b) => a - b);

  let answer = arr[0] + " " + arr[arr.length - 1];

  return answer;
}
