{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    protected coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
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

  class LatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number) {
      super(coffeeBeans);
    }

    private steamMilk() {
      console.log('milk in steam ... 🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();

      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(2);

      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }
  const latteMachine = new LatteMachine(32);
  const latte = latteMachine.makeCoffee(2);

  const sweetCoffeeMachine = new SweetCoffeeMachine(32);
  const sweetCoffee = sweetCoffeeMachine.makeCoffee(2);

  console.log(sweetCoffee);

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(32),
    new LatteMachine(32),
    new SweetCoffeeMachine(32),
  ];

  machines.forEach((machine) => {
    console.log('---------------------------');
    machine.makeCoffee(2);
  });
}
