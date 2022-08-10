const obj = {
  name: 'jisu',
  age: 23,
};

const ob2 = {
  animal: 'cat',
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name'));
