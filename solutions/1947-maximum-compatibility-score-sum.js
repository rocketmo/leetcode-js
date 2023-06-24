/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function(students, mentors) {
  // Calculate and store compatibility scores for each student/mentor combination
  const compatibleMap = [];
  const m = students.length;

  for (let i = 0; i < m; i += 1) {
    compatibleMap.push([]);

    for (let j = 0; j < m; j += 1) {
      let score = 0;

      const studentAns = students[i];
      const mentorAns = mentors[j];

      for (let k = 0; k < studentAns.length; k += 1) {
        score += studentAns[k] === mentorAns[k] ? 1 : 0;
      }

      compatibleMap[i].push(score);
    }
  }

  // Get the maximum score over all permutations
  return getMaxScore(0, new Set());

  function getMaxScore(student, mentorSet) {
    if (student === m) {
      return 0;
    }

    let maxScore = 0;

    for (let i = 0; i < m; i += 1) {
      if (mentorSet.has(i)) {
        continue;
      }

      const newMentorSet = new Set(mentorSet);
      newMentorSet.add(i);

      const currScore = compatibleMap[student][i] + getMaxScore(student + 1, newMentorSet);
      maxScore = Math.max(maxScore, currScore);
    }

    return maxScore;
  }
};
