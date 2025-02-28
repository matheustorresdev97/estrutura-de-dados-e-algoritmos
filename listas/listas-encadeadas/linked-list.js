class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	
	clear = () => {
		this.head = null;
		this.size = 0;
	};

	isEmpty = () => this.size === 0;

	getSize = () => this.size;

	addAtStart = (elem) => {
		const node = new Node(elem);
		node.next = this.head;
		this.head = node;
		this.size++;
	};

	addAtEnd = (elem) => {
		const node = new Node(elem);
		if (this.isEmpty()) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	};
	
	addAtPosition = (index, elem) => {
		if (index < 0 || index > this.size) return;
		if (index === 0) {
			this.addAtStart(elem);
			return;
		}

		const node = new Node(elem);
		const prev = this.getNode(index - 1);
		node.next = prev.next;
		prev.next = node;
		this.size++;
	};

	get = (index) => {
		const current = this.getNode(index);
		return current ? current.value : null;
	};

	getNode = (index) => {
		if (index < 0 || index >= this.size) return null;
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current;
	};
	
	contains = (elem) => this.indexOf(elem) !== -1;

	indexOf = (elem) => {
		let current = this.head;
		let i = 0;
		while (current) {
			if (current.value === elem) return i;
			current = current.next;
			i++;
		}
		return -1;
	};

	removeAtPosition = (index) => {
		if (index < 0 || index >= this.size) return null;

		let removedValue;
		if (index === 0) {
			removedValue = this.head.value;
			this.head = this.head.next;
		} else {
			const prev = this.getNode(index - 1);
			removedValue = prev.next.value;
			prev.next = prev.next.next;
		}

		this.size--;
		return removedValue;
	};

	remove = (elem) => {
		const index = this.indexOf(elem);
		if (index === -1) return false;
		this.removeAtPosition(index);
		return true;
	};

    toArray = (array) => {
        let current = this.head;
        let vect = [];

        while (current) {
            vect.push(current.value);
            current = current.next;
        }

        return vect;
    }

	printLinkedList = () => {
		let current = this.head;
		let output = "";
		while (current) {
			output += current.value + " -> ";
			current = current.next;
		}
		console.log(output + "null");
	};
}
