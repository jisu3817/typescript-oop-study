{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type stackNode = {
    readonly value: string;
    readonly next?: stackNode;
  };

  class StackImp implements Stack {
    private _size = 0;
    private head?: stackNode;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }

    push(value: string): void {
      if (this._size === this.capacity) throw new Error('stack is full!');
      const node: stackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImp(5);
  stack.push('jisu 1');
  stack.push('merry 2');
  stack.push('backend 3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  // error occurred!
  stack.pop();
}
