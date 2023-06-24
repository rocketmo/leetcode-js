const { Queue } = require('@datastructures-js/queue');

/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
  const prereqMap = new Map();
  const nextMap = new Map();

  for (const [ prev, next ] of relations) {
    const prereqs = prereqMap.get(next) ?? 0;
    prereqMap.set(next, prereqs + 1);

    const nextCourses = nextMap.get(prev) ?? [];
    nextCourses.push(next);
    nextMap.set(prev, nextCourses);
  }

  const unfinishedCourses = new Map();
  const canStart = new Queue();

  for (let i = 1; i <= n; i += 1) {
    if (!prereqMap.has(i)) {
      canStart.enqueue({ currTime: 0, course: i });
    } else {
      unfinishedCourses.set(i, { prevTime: 0, prereqsCompleted: 0 });
    }
  }

  let maxTime = 0;

  while (canStart.size() > 0) {
    const { currTime, course } = canStart.dequeue();
    const nextTime = currTime + time[course - 1];
    maxTime = Math.max(maxTime, nextTime);

    const nextCourses = nextMap.get(course) ?? [];
    const added = [];
    for (const nextCourse of nextCourses) {
      if (unfinishedCourses.has(nextCourse)) {
        let unfinishedInfo = unfinishedCourses.get(nextCourse);
        unfinishedInfo.prereqsCompleted += 1;
        unfinishedInfo.prevTime = Math.max(nextTime, unfinishedInfo.prevTime);

        if (unfinishedInfo.prereqsCompleted === prereqMap.get(nextCourse)) {
          canStart.enqueue({ currTime: unfinishedInfo.prevTime, course: nextCourse });
          added.push(nextCourse);
        }
      }
    }

    for (const course of added) {
      unfinishedCourses.delete(course);
    }
  }

  return maxTime;
};
