// //최대공약수와 최소공배수

// //[15, 4]
// // 15%4 = 나머지 3
// 15%4 4%3 3%1 = 0
// // n	m	return
// // 3	12	[3, 12]
// // 2	5	[1, 10]

function solution(x, y) {
  const gcd = (x, y) => (x % y === 0 ? y : gcd(y, x % y)); //최대공약수 / 나누었을때 나머지 0
  const lcm = (x, y) => (x * y) / gcd(x, y); // 최소공배수 / 공통된 배수중 제일 작은 값

  return [gcd(x, y), lcm(x, y)];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
