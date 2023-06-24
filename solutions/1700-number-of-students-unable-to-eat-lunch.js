/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let sandwichIndex = 0;
  const eatenSet = new Set();

  while (sandwichIndex < sandwiches.length) {
    const originalEatenSize = eatenSet.size;

    for (let i = 0; i < students.length; i += 1) {
      if (eatenSet.has(i)) { continue; } // student already ate

      if (students[i] === sandwiches[sandwichIndex]) { // student can eat
        sandwichIndex += 1;
        eatenSet.add(i);
      }

      if (sandwichIndex >= sandwiches.length) {
        break;
      }
    }

    if (originalEatenSize === eatenSet.size) { // no students ate during this pass through
      break;
    }
  }

  return students.length - eatenSet.size;
};
