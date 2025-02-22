// Função principal do Quick Sort
const quickSort = (arr, left, right) => {
    if (left < right) {
        // Encontra o índice do pivô, partindo o array em duas partes
        let pivotIndex = partition(arr, left, right);
        // Aplica recursivamente o quickSort nas sublistas à esquerda e à direita do pivô
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

// Função que particiona o array e retorna o índice do pivô
const partition = (arr, left, right) => {
    // Escolhe o último elemento como pivô
    let pivot = arr[right];
    let i = left;
    
    // Move os elementos menores que o pivô para a esquerda
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    // Coloca o pivô em sua posição correta
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}

// Exemplo de uso:
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Array original:", array);
quickSort(array, 0, array.length - 1);
console.log("Array ordenado:", array);
