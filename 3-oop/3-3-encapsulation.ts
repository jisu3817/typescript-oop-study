{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public (default)
  // private
  // protected
  class CoffeeMaker {
    // private 키워드를 이용하면 외부에서 내부 상태를 직접적으로 변경할 수 없음. (외부에서 보여지지도 않음.)
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    protected coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0)
        throw new Error('value for beans should be greater than 0');

      this.coffeeBeans += beans;
      return this.coffeeBeans;
    }
  }

  // const maker = new CoffeeMaker(32);

  const maker = CoffeeMaker.makeMachine(32);

  // maker.coffeeBeans = -32; // invalid!!

  console.log(maker.fillCoffeeBeans(30));
  const maker2 = CoffeeMaker.makeMachine(48);

  class User {
    constructor(private firstName: string, private lastName: string) {}

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error('error');
      }
      this.internalAge = num;
    }

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const user = new User('jisu', 'kim');
  console.log(user.fullName);

  // user.firstName = 'merry';

  // getter 사용 x => firstName이 한 번 지정되면 변경되지 않음. 그대로 jisu kim이 출력됨.
  console.log(user.fullName);

  user.age = 6;
  console.log(user.age);

  user.age = -1;
  console.log(user.age);
}
