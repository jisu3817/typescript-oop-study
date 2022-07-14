{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // public (default)
  // private
  // protected
  class CoffeeMachine implements CoffeeMaker {
    // private 키워드를 이용하면 외부에서 내부 상태를 직접적으로 변경할 수 없음. (외부에서 보여지지도 않음.)
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    protected coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    clean(): void {
      console.log('cleaning the coffee machine...');
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0)
        throw new Error('value for beans should be greater than 0');

      this.coffeeBeans += beans;
      return this.coffeeBeans;
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}

    makeCoffee() {
      const machine = this.machine.makeCoffee(2);
      console.log(machine);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}

    makeCoffee() {
      const machine = this.machine.makeCoffee(2);
      this.machine.fillCoffeeBeans(64);
      this.machine.clean();
      console.log(machine);
    }
  }
  /*
   * CoffeeMaker를 이용해 커피를 만들고자 한다면 makeCoffee를 실행해야 한다.
   * 클래스 외부에서는 this.grindBenas, preheat, extract 등의 존재 여부, 동작 원리를 알지 못하더라도
   * makeCoffee 메서드만으로 커피를 만들 수 있기 때문에 3개의 메서드가 보여질 필요가 없다.
   * 이러한 것을 추상화라고 하며 외부에 드러날 필요가 없는 메서드는 앞에 private을 붙여주면 외부에서 접근할 수 없게 된다.
   */

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.makeCoffee(2);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.makeCoffee(2);
  // maker2.clean(); => CoffeeMaker 타입을 상요하고 있기 때문에 clean()메서드는 사용할 수 없음.
  /* CoffeMachine의 오브젝트를 생성할 때 타입은 CoffeMachine도 가능하고 CoffeeMaker도 가능하다.
   * 하지만 CoffeeMaker의 경우 인스터를 생성해줄 때 makeCoffee만 정의 해주었기 때문에 해당 메서드만 접근이 가능하다.
   * 이러한 것을 추상화라고 한다.
   * maker2.fillCoffeeBeans(32)에는 접근할 수 없음.
   */

  const coffeeMaker: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  coffeeMaker.makeCoffee(3);
  coffeeMaker.fillCoffeeBeans(30);
  coffeeMaker.clean();
}
