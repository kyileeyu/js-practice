// call, apply bind
// 함수 호출 방식과 관계없이 this를 지정할 수 있음

const mike = {
  name: "Mike",
};

const tom = {
  name: "Tom",
};

function showThisName() {
  console.log(this.name);
}

showThisName();
// call 을 사용하면 call 다음 넣는 매개변수가 this의 값입니다.
// call 메서드는 모든 함수에서 사용 가능! this를 특정값으로 지정할 수 있습니다.
showThisName.call(mike);
showThisName.call(tom);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}
// 첫번쨰는 call 의 thi로 사용될 값, 두세번째는 매개변수
update.call(mike, 1999, "singer");

// apply로 바꿈 : call과 다른점은 배열로 받는다는것!
update.call(mike, [2002, "teacher"]);

const nums = [3, 10, 1, 6, 4];
const minNum = Math.min.apply(null, nums); // 배열형태로 받는다 array->apply
const maxNum = Math.max.call(null, ...nums); // 직접받고

console.log(minNum);
console.log(maxNum);

// bind : 함수의 this 값을 영구히 바꿀 수 있다.

const kyilee = {
  name: "Kyilee",
};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

const updateMike = update.bind(kyilee);

updateMike(1998, "entrapreneuer");
console.log(kyilee);

// bind test!!!

const user = {
  name: "Mike",
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};

user.showName();

let fn = user.showName;

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);
boundFn();
