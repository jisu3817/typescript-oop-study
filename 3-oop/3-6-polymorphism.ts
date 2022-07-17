import { timeStamp } from 'console';

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

  class CheapSteamer {
    private steamMilk() {
      console.log('milk in steam ... 🥛');
    }

    makeMilk(coffee: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class AutomaticSugarMixer {
    private getSugar() {
      console.log('add some sugar...');
      return true;
    }

    addSugar(coffee: CoffeeCup): CoffeeCup {
      const hasSugar = this.getSugar();
      return {
        ...coffee,
        hasSugar,
      };
    }
  }

  class LatteMachine extends CoffeeMachine {
    milkFrother: CheapSteamer;
    constructor(coffeeBeans: number, milkFrother: CheapSteamer) {
      super(coffeeBeans);
      this.milkFrother = milkFrother;
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    sugar: AutomaticSugarMixer;
    constructor(coffeeBeans: number, sugar: AutomaticSugarMixer) {
      super(coffeeBeans);
      this.sugar = sugar;
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(2);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCafeLatteMachine extends CoffeeMachine {
    milkFrother: CheapSteamer;
    sugar: AutomaticSugarMixer;
    constructor(
      coffeeBeans: number,
      milkFrother: CheapSteamer,
      sugar: AutomaticSugarMixer
    ) {
      super(coffeeBeans);
      this.milkFrother = milkFrother;
      this.sugar = sugar;
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const addMilk = this.milkFrother.makeMilk(coffee);
      return this.sugar.addSugar(addMilk);
    }
  }

  const latteMachine = new LatteMachine(32, new CheapSteamer());
  const latte = latteMachine.makeCoffee(2);

  console.log(latte);

  const sweetCoffeeMachine = new SweetCoffeeMachine(
    32,
    new AutomaticSugarMixer()
  );
  const sweetCoffee = sweetCoffeeMachine.makeCoffee(2);

  console.log(sweetCoffee);

  const sweetCafeLatteMachine = new SweetCafeLatteMachine(
    32,
    new CheapSteamer(),
    new AutomaticSugarMixer()
  );

  const sweetCafeLatte = sweetCafeLatteMachine.makeCoffee(2);

  console.log(sweetCafeLatte);

  // const machines: CoffeeMaker[] = [
  //   new CoffeeMachine(32),
  //   new LatteMachine(32),
  //   new SweetCoffeeMachine(32),
  // ];

  // machines.forEach((machine) => {
  //   console.log('---------------------------');
  //   machine.makeCoffee(2);
  // });
}
