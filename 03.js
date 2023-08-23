//체육복
//전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

//접근; reserve의 값은 어떻게 도출되나?
// capa는 reserve의 요소 +1, -1
//즉 reserve가 1일 때 2; 3일때 2,4; 5일때 4,6;
//총 2,2,4,4,6이 되고 여기서 중복값을 제거한 최종capa 2,4,6이다.
//그 capa안에 lost의 요소가 다 포함되면, lost와 reserve를 합친다.

//1. reserve의 각 요소의 -1,+1 값을 구한다.

// var n = 4;
// var lost = [2, 4];
// var reserve = [1, 3, 5];

// function solution(reserve) {
//   var capa = [];
//   for (let i = 0; i < reserve.length; i++) {
//     capa.push(reserve[i] + 1, reserve[i] - 1);
//     const uniqueArr = [...new Set(capa)];
//     answer = uniqueArr; //여기까지 중복값을 제거한 capa [0,2,4,6]구함
//   }
//   for ()
//   return answer;
// }
// console.log(solution(reserve));

//코드를 이렇게 짜다보니 체육복도 잃어버리고 여분의 체육복도 동시에 있는 경우, 그리고 1일 경우 2만 도출해야되는데 그것도 헷갈리고.. 아예 다시 접근하기로 했다.

// var n = 5;
// var lost = [2, 4];
// var reserve = [1, 2, 5];

// function solution(n, lost, reserve) {
//   var answer = 0;

//   let has = new Array(n).fill(1); //전체 학생수가 가지고 있는 유니폼을 1로 초기화 시킴 1로 초기화시킨 이유는 나중에 if 문에서 has[i] === 0인놈들을 구분할 수 없다.
//   for (let i = 0; i < lost.length; i++) {
//     has[lost[i] - 1]--; //잃어버린 학생, i=0일 경우 2: 0,4: 0 i=1 2: 0,4: 0
//   }

//   for (let i = 0; i < reserve.length; i++) {
//     has[reserve[i] - 1]++; //여벌이 있는 학생 , i 가 2까지 돌면 전부 체육복 3개씩 생김
//   }

//   for (let i = 0; i < has.length; i++) {
//     if (has[i] === 0) {
//       if (has[i - 1] === 2) {
//         has[i]++;
//         has[i - 1]--; //좌 학생이 2일경우 i(없는애)에게 +1, 좌학생은 -1
//       } else if (has[i + 1] === 2) {
//         has[i]++;
//         has[i + 1]--;
//       }
//     }
//     if (has[i] >= 1) {
//       answer++;
//     }
//   }
//   return answer;
// }

// console.log(solution(n, lost, reserve)); //완성

//has[lost[i] -1 ]--; 부분이 이해가 안감.

var n = 4;
var lost = [2, 4];
var reserve = [1, 2, 5];

function solution(n, lost, reserve) {
  var answer = 0;

  let has = new Array(n).fill(1); //[1,1,1,1]
  for (let i = 0; i < lost.length; i++) {
    has[lost[i] - 1]--; //lost[i]=2일때 has 열에서 1 lost[i]=4 has 열에서 3 //lost[i]의 요소는 1,2,3,4,5 숫자 그 자체이기때문에 그 숫자는 has 배열에서 요소값에서 1뺀 자리에 있다.
  } //[여기까지 1,0,0,1]이된다. 잃어버린놈 계산 완,

  for (let i = 0; i < reserve.length; i++) {
    has[reserve[i] - 1]++;
  } //i=0일때 1번의 값 [2], i=1일 때 2의 값은 1, i=3일 때 5의 값은 [2]
  //여기까지 [2,1,0,2]

  for (let i = 0; i < has.length; i++) {
    if (has[i] === 0) {
      if (has[i - 1] === 2) {
        has[i]++;
        has[i - 1]--;
      } else if (has[i + 1] === 2) {
        has[i]++;
        has[i + 1]--;
      }
    }
    if (has[i] >= 1) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(n, lost, reserve));
