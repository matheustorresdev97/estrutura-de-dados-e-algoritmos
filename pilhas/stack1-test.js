import Stack1 from "./stack1";

let stack = new Stack1(10);


console.log(stack.isEmpty()); // Saída: true
console.log(stack.count()); // 0

stack.push("Matheus");
stack.push("Maria");
stack.push("João");

console.log(stack.isEmpty()); // Saída: false
console.log(stack.count()); // 3

console.log(stack.peek());

console.log("Items:")
while (!stack.isEmpty()) {
    const item = stack1.pop();
    console.log(item)
}