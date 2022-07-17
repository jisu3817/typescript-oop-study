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

  interface SteamMilkMaker {
    makeMilk(coffee: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(coffee: CoffeeCup): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    protected coffeeBeans: number = 0;

    constructor(
      coffeeBeans: number,
      private milkFrother: SteamMilkMaker,
      private sugarMixer: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
      this.milkFrother = milkFrother;
      this.sugarMixer = sugarMixer;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.milkFrother.makeMilk(coffee);
      return this.sugarMixer.addSugar(sugarAdded);
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

  class NoMilk implements SteamMilkMaker {
    makeMilk(coffee: CoffeeCup): CoffeeCup {
      return coffee;
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(coffee: CoffeeCup): CoffeeCup {
      return coffee;
    }
  }

  class CheapMilkSteamer implements SteamMilkMaker {
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

  class FancyMilkSteamer implements SteamMilkMaker {
    private steamMilk() {
      console.log('Fancy milk in steam ... 🥛');
    }

    makeMilk(coffee: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements SteamMilkMaker {
    private steamMilk() {
      console.log('Cold milk in steam ... 🥛');
    }

    makeMilk(coffee: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SugarMixer implements SugarProvider {
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

  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('add some candy sugar...');
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

  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilkMaker = new NoMilk();

  const sugarMixer = new SugarMixer();
  const candySugarMixer = new CandySugarMixer();
  const noSugarMixer = new NoSugar();

  const coffeeMachine = new CoffeeMachine(32, noMilkMaker, noSugarMixer);
  const cheapLatteMachine = new CoffeeMachine(32, cheapMilkMaker, noSugarMixer);
  const fancyLatteMachine = new CoffeeMachine(16, fancyMilkMaker, noSugarMixer);

  const sweetCoffeeMachine = new CoffeeMachine(32, noMilkMaker, sugarMixer);
  const sweetCandyCoffeeMachine = new CoffeeMachine(
    16,
    noMilkMaker,
    candySugarMixer
  );
  const sweetCandyColdCafeLatteMachine = new CoffeeMachine(
    32,
    coldMilkMaker,
    candySugarMixer
  );
}
