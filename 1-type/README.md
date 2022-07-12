## 함수 (function)

**기본 형태**

```tsx
// 입력되는 파라미터와 반환되는 값의 타입을 지정할 수 있다.
// promise를 반환하는 경우 Promise<타입>
function FetchNum(id: string): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}
```

**Optional Parameter**

```tsx
// 필수로 받아오지 않아도 되는 파라미터의 경우 '?'를 붙여줌.
function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  console.log(lastName);
}

printName('jisu', 'kim');

function printName(firstName: string, lastName: string) {
  console.log(firstName);
  console.log(lastName);
}

printName('jisu'); // 타입 에러
```

**Default Parameter**

```tsx
// 파라미터를 넘겨주지 않았을 때 default로 지정된 값이 할당 됨.
function printMessage(message: string = 'hello') {
  console.log(message);
}

printMessage(); // 'hello' 출력
```

**Rest Parameter**

```tsx
// 받아오는 값들을 배열 타입으로 묶어줌.
function addNumbers(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}
```

---

## 배열 (Array)

배열 타입을 지정할 수 있는 두가지 방법

```tsx
const fruits: string[] = ['apple', 'banana'];
const scores: Array<number> = [1, 2, 3];

// readonly는 string[]만 가능, Array<number>는 사용 x
function printArray(fruits: readonly string[]) {}
```

튜플

```tsx
// Tuple -> interface, type alias, class 등에서 사용.
// 튜플 사용을 권장하지 않음.
let student: [string, number];
student = ['name', 1];

// 인덱스로 값을 접근하는 것은 가독성이 떨어짐. (접근하는 값마다 타입이 달라짐)
student[0]; // name
student[1]; // 1

// 이렇게 사용하는게 조금 더 나은 방법. 하지만 이것도 별로.
const [name, age] = student;
```

---

## Type Alias

```tsx
type Text = string;
const name: Text = 'hello';

type Student = {
  name: string;
  age: number;
};

// 타입으로 지정된 값과 타입만 사용할 수 있음.
// 매우 제한적이고 안전한 코딩 작업을 할 수 있음.
const student: Student = {
  name: 'jisu',
  age: 23,
};
```

String Literal Types

```tsx
type Name = 'name';
  let jisuName: Name;

  jisuName = 'name';
}
```

왜 굳이 값을 타입으로 지정해주는 걸까?

그 이유는 **유니온 타입**을 사용할 때 아주 유용하기 때문이다.

## Union Type

유니온 타입은 쉽게 말해 ‘or’ 즉 ‘또는'이라고 생각하면 된다.

```tsx
// 타입으로 지정된 값들 중에서만 사용할 수 있음.
type Direction = 'left' | 'right' | 'up' | 'down';
function move(direction: Direction) {
  console.log(direction);
}
move('down');
```

---

## Intersection Type

intersection 타입은 ‘and’라고 생각하면 된다.

```tsx
type Student = {
  name: string;
  score: number;
};

type Worker = {
  employeeId: number;
  work: () => void;
};

function internWork(person: Student & Worker) {
  console.log(person.name, person.employeeId, person.work);
}

// 이 중 한가지라도 빠지면 타입 에러 발생.
internWork({ name: 'jisu', score: 1, employeeId: 123, work: () => {} });
```

---

## enum

```tsx
// 이와 같이 열거형으로 표현해야 하는 경우 유용.
const korean = 'ko';
const english = 'en';
const japanese = 'ja';
const chinese = 'zh';
const spanish = 'es';

enum LanguageCode {
  korean = 'ko',
  english = 'en',
  japanese = 'ja',
  chinese = 'zh',
  spanish = 'es',
}

const language: LanguageCode = LanguageCode.korean;

console.log(language); // 'ko'
```
