/**
  Arquivo: countStudents.js
  Autor: Matheus
  Data: 06/03/2025
  Hora: 12:50:53
 */

function countStudents(students, sandwiches) {

    let queue = students.slice();

    for (let sandwich of sandwiches) {

        let eat = false;
        let count = queue.length;

        while (!eat && count > 0) {

            let student = queue.shift();
            if (student === sandwich) {
                eat = true;
            }
            else {
                queue.push(student);
                count--;
            }
        }

        if (count === 0) {
            return queue.length;
        }
    }
    return 0;
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]))