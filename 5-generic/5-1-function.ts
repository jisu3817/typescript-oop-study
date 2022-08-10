{
  function checkNotNull(arg: number | null): number {
    if (arg === null) throw new Error('Not valid number');
    return arg;
  }

  const result = checkNotNull(23);
  console.log(result);
  checkNotNull(null);

  function checkNotNullForGeneric<T>(arg: T | null): T {
    if (arg === null) throw new Error('Not valid number');
    return arg;
  }

  const number = checkNotNullForGeneric(23);
  const bool = checkNotNullForGeneric(true);
}
