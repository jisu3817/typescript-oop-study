{
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text: Name = 123; // type error
  const text2: Name = 'hello';

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const keys: Keys = 'name';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'rabbit',
    gender: 'male',
  };
}
