{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left(): L {
      return this.leftValue;
    }

    right(): R {
      return this.rightValue;
    }
  }

  const either: Either<number, string> = new SimpleEither(2, 'hello');
  either.left; // 2
  either.right; // hello
}
