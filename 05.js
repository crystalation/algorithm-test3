//k번째수

//접근방법: 문자열을 주어진 순서로 자르고, 오름차순 정리, 배열의 k번째 숫자 뽑기
//for 는 i부터 j까지 돌아야함
//commands0 = i ; commands1 = j; commands 2 = k

//힌트
//let [start, end, index] = commands[i]로 설정가능
// for문을 돌려서 array값을 start부터 end로 잘라주는 배열을 만든 후
// answer배열에 넣고
// 주의사항 : 문제에서 제시한 자르는 index값을 유의해야 함

//[2, 5, 3],
//[1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]
function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let [start, end, index] = commands[i]; //start는< array.length 만큼, end
    let nums = array.slice(start - 1, end); //
    nums.sort((a, b) => a - b);
    answer.push(nums[index]); //index를 그냥 줘버리면 우리가 만들어놓은 nums인덱스의 순서와 맞지 않아서 -1 해줘야함.
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
