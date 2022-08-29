{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ... in
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    animal: 'cat', // Video에 없는 값으로 type error 발생
  };

  type Animal = {
    name: string;
    age: number;
  };

  const AniamalOp: Optional<Animal> = {
    name: 'dog',
    age: 1,
    gender: 'male', // type error 발생
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoReadonly = ReadOnly<Animal>;

  const aniaml: VideoReadonly = {
    name: 'fox',
    age: 2,
  };

  aniaml.age = 3; // 읽기 전용이므로 type error 발생

  // type VideoReadonly = {
  //   readonly title: string;
  //   readonly author: string;
  // };
}
