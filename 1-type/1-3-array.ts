{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: Array<number> = [1, 2, 3];

  // readonly는 string[]만 가능, Array<number>는 사용 x
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class 등에서 사용.
  // 튜플 사용을 권장하지 않음.
  let student: [string, number];
  student = ['name', 1];

  // 인덱스로 값을 접근하는 것은 가독성이 떨어짐.
  student[0]; // name
  student[1]; // 1

  // 이렇게 사용하는게 조금 더 나은 방법. 하지만 이것도 별로.
  const [name, age] = student;
}
