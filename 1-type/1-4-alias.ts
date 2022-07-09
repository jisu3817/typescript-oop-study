{
  // 타입스크립트가 강력한 이유 -> type alias!!

  /**
   * Type Aliases
   */

  type Text = string;
  const name: Text = 'hello';

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'jisu',
    age: 23,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let jisuName: Name;

  jisuName = 'name';
}
