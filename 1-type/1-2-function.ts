// javascript
// function jsFetchNum(id) {
//   return new Promise((resolve, reject) => {
//     resolve(100);
//   });
// }

// typescript
function FetchNum(id: string): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

// Optional paprameter
function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  console.log(lastName);
}

printName('jisu', 'kim');

// Default parameter
function printMessage(message: string = 'hello') {
  console.log(message);
}

printMessage();

//Rest parameter
function addNumbers(...numbers: number[]): number {
  console.log(numbers);
  return numbers.reduce((a, b) => a + b);
}

addNumbers(1, 2);
