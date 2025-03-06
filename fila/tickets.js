/**
  Arquivo: tickets.js
  Autor: Matheus
  Data: 06/03/2025
  Hora: 12:43:07
 */

function timeRequiredToBuy(tickets, k) {

    let queue = [];
    let n = tickets.length;

    for (let i = 0; i < n; i++) {
        queue.push(i);
    }

    let time = 0;
    while (true) {
        let i = queue.shift();
        tickets[i]--;
        time++;
        if (tickets[i] > 0) {
            queue.push(i);
        }
        else if (i === k) {
            return time;
        }
    }
}

console.log(timeRequiredToBuy([2, 3, 1, 2], 2)); // Output: 7
console.log(timeRequiredToBuy([2, 3, 1, 2], 3)); // Output: 10