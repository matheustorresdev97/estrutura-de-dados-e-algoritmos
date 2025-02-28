import DoublyLinkedList from "./doubly-linked-list.js"

const list = new DoublyLinkedList();

list.addAtEnd(20);
list.addAtEnd(9);
list.addAtEnd(86);
list.addAtEnd(15);

list.toArray();
console.log(`Tamanho da lista: ${list.toArray()}`);

list.addAtPosition(2, 23);


console.log(`Tamanho da lista: ${list.getSize()}`);
list.getSize();

console.log("Clar list...")
list.clear();


list.reverse();


