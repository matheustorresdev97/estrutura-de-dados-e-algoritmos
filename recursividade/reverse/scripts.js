function reverse(list) {
    if(list.lenght <= 1) return list;

    const head = list[0]
    const tail = list.slice(1)

    return [...reverse(tail), head]
}

const result = reverse(["azul", "verde", "preto", "rosa"])
console.log(result)

