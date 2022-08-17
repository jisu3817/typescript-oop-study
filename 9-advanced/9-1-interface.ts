type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object
const obj1: PositionType = {
  x: 1,
  y: 2,
};
const obj2: PositionInterface = {
  x: 1,
  y: 2,
};

// impolements
class Position1 implements PositionType {
  x: number;
  y: number;
}

class Position2 implements PositionInterface {
  x: number;
  y: number;
}

// extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };

// only interfaces can be merged,
interface UserInterface {
  name: string;
  age: number;
}

interface UserInterface {
  address: string;
}

const user: UserInterface = {
  name: 'kimjisoo',
  age: 23,
  address: 'seoul',
};

// Type aliases can use computed properties
type UserType = {
  name: string;
  age: number;
};

type Name = UserType['name'];
