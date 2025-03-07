import { visitors } from "./visitantes-input.js"

function total(visitors) {
    const uniqueVisitors = new Set();

    for (let visitor of visitors) {
        const name = visitor.split(",")[0]
        uniqueVisitors.add(name)
    }

    console.log(`Total de visitantes únicos: ${uniqueVisitors.length}`)
}

function totalNaive(visitors) {
    const uniqueVisitors = []

    for (let visitor of visitors) {
        const name = visitor.split(",")[0]
        if (!uniqueVisitors.includes(name)) { // O(n)
            uniqueVisitors.push(name)
            console.log(`Nome: ${name}, Quantidade: ${visitors.filter(v => v.split(",")[0] === name).length}`)
        }
    }

    console.log(`Total de visitantes únicos: ${uniqueVisitors.length}`)
}

const start1 = new Date();
total(visitors)
const end1 = new Date();
console.log(`Tempo de execução do algoritmo com Set: ${end1 - start1} ms`)


const start2 = new Date();
totalNaive(visitors)
const end2 = new Date();
console.log(`Tempo de execução do algoritmo sem Set: ${end2 - start2} ms`)