class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
        return this.stack;
    }
    
    pop() {
        return this.stack.pop;
    }
    Peek() {
        return this.stack[this.stack.length - 1];
    }
    
    size() {
        return this.stack.length;
    }

    print() {
        console.log(this.stack);
    }
}

const stack = new Stack();
console.log(stack.size());
console.log(stack.push('Jhon Cena'));
console.log(stack.push('The Rock'));
console.log(stack.size());
stack.print();
console.log(stack.Peek());
console.log(stack.pop());
console.log(stack.Peek());

