//소수 찾기
//1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
//소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.(1은 소수가 아닙니다.)

//접근방식: 1~n을 돌면서 요소가 소수인지 체크
//그럴려면 우선 1~n을 배열화 해야함
//배열을 만들었으면 그 요소들이 소수인지 확인한다.
//요소가 소수가 맞다면 answer의 카운트를 올려준다

var n = 10; //result = 4

function solution(n) {
  answer = 0;
  var nums = [];
  for (var i = 1; i < n + 1; i++) {
    nums.push(i);
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      return false;
    } else if (nums[i] === 2) {
      return true;
    } else {
      for (let j = 2; j < nums[j]; j++)
        if (nums[i] % 1 === 0) {
          return false;
        }
    }
  }
  return true;
}

console.log(solution(n));

//위와 같이 하니까 false만 나옴..그렇다면

//소수의 개념이 뭔가? 자기 자신과 1 빼고는 나누어 지지 않는 수 이다.

// var n = 10; //result = 4 (2,3,5,7)

// function solution(n) {
//   var answer = 0;
//   var arr = new Array(n + 1).fill(true); //1부터 10까지 배열화 해준 후 모두 true 값으로 바꾼다
//   //해당 코드는 n이 10일 때, 길이가 11이고 모든 요소가 true인 배열 arr을 생성합니다.
//배열의 인덱스는 0부터 n까지 총 n+1개이며, 인덱스 0은 사용되지 않습니다. 따라서 인덱스 1부터 n까지의 요소는 모두 true로 초기화됩니다.
//즉, arr은 다음과 같은 배열입니다.

//0번째 요소는 왜 사용되지 않는거야? 약속인거야?
//네, 배열의 0번째 인덱스가 비어있는 것은 자바스크립트에서 일반적인 규칙 중 하나입니다. 이것은 C언어와 같은 몇몇 프로그래밍 언어에서도 마찬가지입니다.

// 이 규칙은 초기 컴퓨터 언어에서부터 유래하며, 이전에는 컴퓨터 메모리의 첫 번째 바이트(8비트)가 주소 0을 가리키도록 규정되어 있었습니다. 이에 따라 배열의 인덱스가 0부터 시작하게 되었고, 이후에 이러한 규칙이 프로그래밍 언어에서도 적용되었습니다.

// 따라서 자바스크립트에서도 배열의 인덱스가 0부터 시작하는 규칙이 적용되고, 배열의 0번째 인덱스는 요소를 저장하지 않는 것이 일반적입니다.

//이렇게 [true],[true],..인 1~10의 배열이 생성되고,

function solution(n) {
  var answer = 0;
  var arr = new Array(n + 1).fill(true);
  for (let i = 2; i <= n; ++i) {
    // 1은 건너뛴다, 어차피 소수가 아니므로
    if (arr[i] === false) {
      continue;
    }
    for (let k = i * 2; k <= n; k += i) {
      arr[k] = false;
    }
  }
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === true) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(n));

// //무슨말인지 모르겠음..넘어가자

//숫자를 객체화시키기

var n = 10;

function solution(n) {
  const s = new Set(); // 여기까진 빈 객체
  for (let i = 1; i <= n; i += 2) {
    s.add(i); //객체에 홀수들을 넣어준다, 근데 1이 포함되어있으니
  }
  s.delete(1); //1은 빼주고
  s.add(2); //2는 넣어준다,
  ///s={2,3,5,7,9}

  for (let i = 2; i <= n; i++) {
    //얘는 아예 새로 만든 숫자;s 아님! 2,3,4,5,6,7,8...

    if (s.has(i)) {
      //i있으면, true니까 for문으로 들어감//
      for (let x = 3 * 2; x <= n; x += i) {
        //{2,3,5,7}
        s.delete(x);
      }
    }
  }
  return s.size;
  //length는 안되는 이유가 set() {3,5,7,2} 로 객체로 나오기때문에
} //객체 = > .size, .has, .delete, .add / 배열 => .length

console.log(solution(10));
console.log(solution(5));
