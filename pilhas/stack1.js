export default class Stack1 {
    constructor(size = 100) {
        this.size = size;
        this.arr = new Array(size);
        this.top = -1
    }

    push(item) {
        if (this.isFull()) {
            throw new Error("Stack Overflow");
        }
        this.top++;
        this.arr[this.top] = item;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack Underflow");
        }
        const item = this.arr[this.top];
        this.top--
        return item;
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.size - 1;
    }

    count() {
        return this.top + 1;
    }

    peek() {
        return this.arr[this.top];
    }

}