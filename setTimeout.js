// setTimeout : 일정 시간이 지난 후 함수 실행
// setInterval : 일정 간격으로 함수 실행

// 기본
function fn() {
  console.log(3);
}
setTimeout(fn, 3000);

// 이렇게 함수안에서도 작성 가능
setTimeout(function () {
  console.log(3);
}, 3000);

// 함수가 매개변수를 필요로 할 때 인수를 주는 법
function showName(name) {
  console.log(name);
}

setTimeout(showName, 1000, "Mike");

// clearTimeout 사용 : 스케줄링 취소
const tid = setTimeout(showName, 1000, "Mike");

clearTimeout(tid);

let num = 0;
function showTime() {
  console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
  if (num > 5) {
    clearInterval(tId);
  }
}

const tId = setInterval(showTime, 1000);
