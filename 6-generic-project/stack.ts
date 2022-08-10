{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type stackNode<T> = {
    readonly value: T;
    readonly next?: stackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size = 0;
    private head?: stackNode<T>;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }

    push(value: T): void {
      if (this._size === this.capacity) throw new Error('stack is full!');
      const node: stackNode<T> = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(5);
  stack.push(1);
  stack.push({ name: 'jisu' });
  stack.push('cat');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
