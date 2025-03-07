let A = new Set([1, 2, 3, 4])
let B = new Set([3, 4, 5, 6])

console.log("Conjunto A: " + A)
console.log("Conjunto B: " + B)

A.add(9);
console.log("Conjunto A (agregado): ", A)

A.delete(1);
console.log("Conjunto A (eliminado): ", A)

console.log("5 pertence ao conjunto A? ", A.has(5))

console.log("Conjunto A está vazio? ", A.size === 0)

console.log("Tamanho do conjunto A: ", A.size)

// UNIÃO
let C1 = new Set([...A, ...B])
let C2 = new Set(A)
B.forEach(item => C2.add(item));
console.log("União de A e B (Conjunto C1): ", C1)
console.log("União de A e B (Conjunto C2): ", C2)

// INTERSECÇÃO
let C = new Set([...A].filter(x => B.has(x)))