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

    private grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
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

    fillCoffeeBeans(beans: number) {
      if (beans < 0)
        throw new Error('value for beans should be greater than 0');

      this.coffeeBeans += beans;
      return this.coffeeBeans;
    }
  }

  /*
   * CoffeeMaker를 이용해 커피를 만들고자 한다면 makeCoffee를 실행해야 한다.
   * 클래스 외부에서는 this.grindBenas, preheat, extract 등의 존재 여부, 동작 원리를 알지 못하더라도
   * makeCoffee 메서드만으로 커피를 만들 수 있기 때문에 3개의 메서드가 보여질 필요가 없다.
   * 이러한 것을 추상화라고 하며 외부에 드러날 필요가 없는 메서드는 앞에 private을 붙여주면 외부에서 접근할 수 없게 된다.
   */

  const coffeeMaker = CoffeeMaker.makeMachine(32);
  coffeeMaker.makeCoffee(2);
}
