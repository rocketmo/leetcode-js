/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const dirs = dominoes.split("");
    const domQueue = [];

    // Add all initial push directions into a queue, going left to right
    for (let i = 0; i < dirs.length; i += 1) {
        const dir = dirs[i];
        if (dir === "R" || dir === "L") {
            domQueue.push({
                index: i,
                direction: dir
            });
        }
    }

    // Check if each push direction affects a neighbouring domino
    let qIndex = 0;
    while (qIndex < domQueue.length) {
        const nextDir = domQueue[qIndex];

        // Pushed left
        if (nextDir.direction === "L") {

            // Pushes previous domino only if it is standing upright
            if (nextDir.index - 1 >= 0 && dirs[nextDir.index - 1] === ".") {
                dirs[nextDir.index - 1] = "L";
                domQueue.push({
                    index: nextDir.index - 1,
                    direction: "L"
                });
            }
        }

        // Pushed right
        else {
            // Peak at the next push direction in the queue; if it is to the left and 2 dominoes
            // ahead of the current right push, then they cancel each other out
            const peakNext = domQueue[qIndex + 1];
            if (peakNext && peakNext.index === nextDir.index + 2 && peakNext.direction === "L") {
                qIndex += 1;
            }

            // Otherwise, check if the next domino is upright; if it is, push it to the right
            else if (nextDir.index + 1 < dirs.length && dirs[nextDir.index + 1] === ".") {
                dirs[nextDir.index + 1] = "R";
                domQueue.push({
                    index: nextDir.index + 1,
                    direction: "R"
                });
            }
        }

        qIndex += 1;
    }

    return dirs.join("");
};
