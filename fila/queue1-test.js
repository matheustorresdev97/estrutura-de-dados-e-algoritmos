/**
  Arquivo: queue1-test.js
  Autor: Matheus
  Data: 06/03/2025
  Hora: 12:28:44
 */

import Queue1 from "./queue1";

const queue = new Queue1();

queue.remove();

console.log("queue.count(): ", queue.count());
console.log("queue.isEmpty(): ", queue.isEmpty());

queue.add("Matheus");
queue.add("João");
queue.add("Maria");

console.log("queue.isEmpty(): ", queue.isEmpty());
console.log("queue.count(): ", queue.count());
console.log("queue.peek(): ", queue.peek());

console.log("Items:")
while (!queue.isEmpty()) {
  const item = queue.remove();
}