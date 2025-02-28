function verificaParenteses(s) {
    let pilha = []; // Usamos um array como pilha para armazenar os parênteses abertos
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '(') {
            pilha.push(char); // Adiciona o parênteses aberto à pilha
        } else if (char === ')') {
            if (pilha.length === 0) { // Se não houver parênteses aberto correspondente, retorna false
                return false;
            }
            pilha.pop(); // Remove o último parênteses aberto
        }
    }
    // Se a pilha estiver vazia, todos os parênteses foram fechados corretamente
    return pilha.length === 0;
}

// Exemplos de uso:
console.log(verificaParenteses("(a + b) * (c - d)")); // Saída: true
console.log(verificaParenteses("((a + b)"));           // Saída: false
console.log(verificaParenteses(")(a+b)("));            // Saída: false
