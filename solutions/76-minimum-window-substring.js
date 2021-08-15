/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    // Count the number of occurences of each character in t
    const tCountMap = new Map();

    for (const char of t) {
        if (!tCountMap.has(char)) {
            tCountMap.set(char, 0);
        }

        tCountMap.set(char, tCountMap.get(char) + 1);
    }

    const charIndices = [];      // Tracks all indices in s where the char at that index is in t
    const sCountMap = new Map(); // Counts the number of each char in our window
    let foundChars = 0;          // Counts how many matches from t we've found in s
    let leftIdx = null;          // Left index of our window (within charIndices)
    let rightIdx = null;         // Right index of our window (within charIndices)
    let minSubStr = "";          // Our answer

    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];

        // Character is not in t, skip
        if (!tCountMap.has(char)) { continue; }

        // Keep track of the character
        charIndices.push(i);

        // Increment counters
        if (!sCountMap.has(char)) {
            sCountMap.set(char, 0);
        }

        if (sCountMap.get(char) < tCountMap.get(char)) {
            foundChars += 1;
        }

        sCountMap.set(char, sCountMap.get(char) + 1);

        // We're in a valid window, check if the min substr in the window is our answer
        if (foundChars >= t.length) {
            updateMinSubStr();
        }
    }

    return minSubStr;


    function updateMinSubStr() {
        // Set the initial answer
        if (leftIdx === null) {
            leftIdx = 0;
            rightIdx = charIndices.length - 1;
            slideWindow();
            minSubStr = s.substring(charIndices[leftIdx], charIndices[rightIdx] + 1);
        }

        // The last character found matches the first character in our window; slide the window
        // and check if the substring within the new window is our answer
        else if (s[charIndices[leftIdx]] === s[charIndices[charIndices.length - 1]]) {
            slideWindow();
            let currSubStr = s.substring(charIndices[leftIdx], charIndices[rightIdx] + 1);
            if (currSubStr.length < minSubStr.length) {
                minSubStr = currSubStr;
            }
        }
    }

    // Slides the window to the end, remove any character from the beginning if the count of that
    // character exceeds the count needed
    function slideWindow() {
        rightIdx = charIndices.length - 1;
        let char = s[charIndices[leftIdx]];

        while (sCountMap.get(char) > tCountMap.get(char)) {
            sCountMap.set(char, sCountMap.get(char) - 1);
            leftIdx += 1;
            char = s[charIndices[leftIdx]];
        }
    }
};
