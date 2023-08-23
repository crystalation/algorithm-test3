// 나머지가 1이 되는 수 찾기

// n	result
// 10	3
// 12	11
//나머지 1

//자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 //return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 0<i <= n
function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
console.log(solution(10));
console.log(solution(12));
