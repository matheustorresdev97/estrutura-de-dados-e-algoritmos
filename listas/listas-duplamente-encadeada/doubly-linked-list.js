class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Remove todos os nós da lista
    clear = () => {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Retorna o tamanho da lista
    getSize = () => {
        return this.size;
    }

    // Verifica se a lista está vazia
    isEmpty = () => {
        return this.size === 0;
    }

    // Adiciona um elemento no início da lista
    addAtStart = (elem) => {
        const node = new Node(elem);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    // Adiciona um elemento no final da lista
    addAtEnd = (elem) => {
        const node = new Node(elem);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    // Adiciona um elemento em uma posição específica (índice)
    addAtPosition = (index, elem) => {
        if (index < 0 || index > this.size) {
            console.error("Índice fora dos limites");
            return;
        }
        if (index === 0) {
            this.addAtStart(elem);
            return;
        }
        if (index === this.size) {
            this.addAtEnd(elem);
            return;
        }
        const node = new Node(elem);
        let current = this.getNode(index - 1);
        node.next = current.next;
        node.prev = current;
        current.next.prev = node;
        current.next = node;
        this.size++;
    }

    // Retorna o valor do nó na posição 'index'
    get = (index) => {
        let current = this.getNode(index);
        return current ? current.value : null;
    }

    // Retorna o nó (node) na posição 'index'
    getNode = (index) => {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        let currentIndex = 0;
        while (current !== null && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
        return current;
    }

    // Remove o primeiro elemento da lista e retorna seu valor
    removeFromStart = () => {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            // Lista ficou vazia
            this.tail = null;
        }
        this.size--;
        return value;
    }

    // Remove o último elemento da lista e retorna seu valor
    removeFromEnd = () => {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            // Lista ficou vazia
            this.head = null;
        }
        this.size--;
        return value;
    }

    // Remove o elemento na posição especificada e retorna seu valor
    removeAtPosition = (index) => {
        if (index < 0 || index >= this.size) {
            console.error("Índice fora dos limites");
            return null;
        }
        if (index === 0) {
            return this.removeFromStart();
        }
        if (index === this.size - 1) {
            return this.removeFromEnd();
        }
        let current = this.getNode(index);
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.size--;
        return current.value;
    }

    // Remove o primeiro nó que contenha o valor especificado e retorna seu valor
    removeElement = (elem) => {
        if (this.isEmpty()) {
            return null;
        }
        let current = this.head;
        while (current !== null) {
            if (current.value === elem) {
                // Se for o primeiro nó
                if (current === this.head) {
                    return this.removeFromStart();
                }
                // Se for o último nó
                if (current === this.tail) {
                    return this.removeFromEnd();
                }
                // Se estiver no meio
                current.prev.next = current.next;
                current.next.prev = current.prev;
                this.size--;
                return current.value;
            }
            current = current.next;
        }
        return null; // Elemento não encontrado
    }

    // Reverte a lista duplamente encadeada
    reverse = () => {
        let current = this.head;
        let temp = null;
        while (current !== null) {
            // Troca os ponteiros 'next' e 'prev'
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = temp;
        }
        // Troca o head e tail
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // Procura um elemento na lista e retorna seu índice (ou -1 se não encontrar)
    search = (elem) => {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.value === elem) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    // Retorna um array com os valores da lista
    toArray = () => {
        let current = this.head;
        let array = [];
        while (current !== null) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
}