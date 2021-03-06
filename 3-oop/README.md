# 클래스 특징

### 1. 캡슐화 (encapsulation)

데이터의 구조와 다루는 방법을 결합시켜 묶어놓은 것을 말합니다.
</br>
또한 데이터를 은닉(priavte)하고, 데이터에 접근하는 기능을 노출시키지 않는다는 의미도 가질 수 있습니다.
</br>
클래스 외부에서 접근하지 않아도 되는 데이터는 private 키워드로 은닉화할 수 있습니다.

</br>

### 2. 추상화 (abstraction)

객체의 공통된 특징을 뽑아 하나의 클래스로 표현하는 것을 말합니다.
</br>
인스턴스, 은닉화 등을 이용해 추상화의 개념을 적용할 수 있습니다.
</br>
같은 클래스의 오브젝트를 생성하더라도 어떤 인스턴스를 타입으로 가지느냐에 따라 접근할 수 있는 메서드가 달라집니다.
</br>
내부 동작 원리를 알지 못해도 클래스에서 제시하는 메서드를 통해 원하는 동작을 쉽게 해낼 수 있습니다. ()

</br>

### 3. 상속 (inheritance)

상속의 개념을 이용하면 기존의 클래스를 확장하여 새로운 클래스로 생성할 수 있습니다.

- 상속 키워드 'extends'

```tsx
class LatteMachine extends CoffeeMachine {}
```

기존의 클래스 메서드를 그대로 활용 가능하며 오버라이딩을 활요하여 기존 클래스의 메서드를 새롭게 재정의할 수 있습니다.

```tsx
class LatteMachine extends CoffeeMachine {
  constructor() {}

  // 기존 CoffeeMachine에 있는 메서드.
  coffeeMaker(shots: number);
}
```

만약 기존의 메서드를 그대로 사용하면서 몇가지 추가하여 사용하고 싶다면 super 키워드를 사용할 수 있습니다.

```tsx
class LatteMachine extends CoffeeMachine {
  constructor() {}

  steamMilk(): void {
    console.log('milk in steam...');
  }
  // 기존 CoffeeMachine에 있는 메서드.
  coffeeMaker(shots: number) {
    // super를 사용하면 부모 클래스의 모든 메서드에 접근 가능함.
    const coffee = super.coffeeMaker();
    this.steamMilk();

    return { ...coffee, hasMilk: true };
  }
}
```

또한 생성자 오버라이딩도 가능합니다.<br>
클래스를 상속한 후 constructor가 없다면 비어있는 constructor가 생성됩니다. <br>
부모 클래스의 constructor를 사용하면서 새로운 인자를 추가하고 싶다면 다음과 같이 작성할 수 있습니다.

```tsx
class LatteMachine extends CoffeeMachine {
  constructor(coffeeBeans: number, source: number) {
    super(coffeeBenas);
    this.source = source;
  }

  // 기존 CoffeeMachine에 있는 메서드.
  coffeeMaker(shots: number);
}
```

### 4. 다형성 (polymorphism)

다형성은 특정 기능을 선언(설계)부분과 구현(동작)부분으로 분리한 후 구현부분을 다양한 방법으로 만들어 선택하여 사용할 수 있게 하는 기능이다. </br>
여기서 선언이란 인터페이스를 의미한다. 예를 들어 커피머신 인터페이스 하나를 상속을 통해 다양한 종류의 커미머신을 생성할 수 있다. <br>
동일한 인터페이스를 이용해 클래스를 만들었기 때문에 동일한 메서드를 이용할 수 있다는 장점이 있다.

<br>

### Composition

상속을 사용해 기존 클래스를 이용한 다양한 클래스를 생성할 수 있겠지만 이것을 무분별하게 사용하게 되면 <br> 클래스 간의 관계가 굉장히 복잡해질 수 있다. 또한, 상속을 한다는 것은 수직적인 관계가 형성되는 것이기 때문에 <br>
중간에 있는 클래스를 수정하기가 어려운 형태가 되어있을 수 있다. <br>

이러한 상속의 단점이 있어 상속보다는 <b>composition</b>의 사용을 지향한다. <br>
composition은 의존성 주입을 통해 필요한 기능을 재사용할 수 있다는 장점이 있다.

- 상속 <br>
  <img src="https://user-images.githubusercontent.com/79014269/179396745-ba05b6c4-01e1-45f3-b6fb-6929ec834fb4.jpeg" width="400" height="500"/>

- 의존성 주입(composition) <br>
  <img src="https://user-images.githubusercontent.com/79014269/179396767-d6e6b6a9-1607-492b-818c-1a06bcc0a48a.jpeg" width="400" height="500"/>

하지만 의존성 주입의 가장 치명적인 단점은 주입된 클래스만을 사용해야 하며 스스로를 제약시키는 방식이다. <br>
또한 다른 종류의 클래스를 만든다면 기존의 클래스를 모두 수정해줘야 한다. <br>
이처럼 클래스 간의 사이를 관계짓는 것은 좋지 않다.

### decoupling된 의존성 주입

```tsx
class SeoulMilkMaker() {}

class CafeLatteMachine() {
  milkFrother: SeoulMilkMaker;
  constructor(coffeeBeans: number, milkFrother: SeoulMilkMaker) {
    this.coffeeBeans = coffeeBeans;
    this.milkFrother = milkFrother;
  }
}

const cafeLatteMachine = new CafeLatteMachie(32, new SeoulMilkMaker)
```

카페라떼 머신이 있다고 해보자. 위 코드대로 라면 '서울우유'만을 이용해서만 카페라떼를 만들 수 있다. <br>
한 가지 종류의 우유만 사용할 수 있다면? 재사용성이 굉장히 떨어진 coupling된 클래스가 만들어 진다. <Br>
이와 같은 의존성 주입의 치명적인 단점을 보완하기 위해서 <b>강력한 인터페이스</b>를 활용할 수 있다.

```tsx
interface MilkMaker {
  makeMilk();
}
class SeoulMilkMaker implements MilkMaker {}
class MailMilkMaker implements MilkMaker {}

class CafeLatteMachine() {
  milkFrother: MilkMaker;
  constructor(coffeeBeans: number, milkFrother: MilkMaker) {
    this.coffeeBeans = coffeeBeans;
    this.milkFrother = milkFrother;
  }
}

const seoulCafeLatteMachine = new CafeLatteMachie(32, new SeoulMilkMaker());
const mailCafeLatteMachine = new CafeLatteMachine(32, new MailMilkMaker())
```

MilkMaker에 대한 인터페이스를 생성하여 카페라떼 머신이 이 인터페이스를 주입받을 수 있도록 만들어 주었다. <br>
이로써 MilkMaker 인터페이스를 활용하면 makeMilk()메서드만 구현해낸다면 어떤 종류의 milkMaker든 상관없이 <br>
카페라떼머신 클래스를 구현할 수 있다. 우유의 종류가 바뀔 때마다 새로운 커피머신 클래스를 생성할 필요가 없어진 것이다. <br>
이처럼 인터페이스를 활용하면 decoupling된 재사용성 높은 코드를 유지할 수 있다.
