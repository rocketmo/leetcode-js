/**
 * Brute force solution: Increment `n` until `n` is a beautiful number
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
    n += 1;

    while (true) {
        if (isBeautiful(n)) {
            return n;
        }

        n += 1;
    }

    function isBeautiful(num) {
        const digitMap = new Map();

        while (num > 0) {
            const digit = num % 10;
            const digitCount = digitMap.get(digit) ?? 0;
            digitMap.set(digit, digitCount + 1);
            num = Math.floor(num / 10);
        }

        for (const digit of digitMap.keys()) {
            if (digit !== digitMap.get(digit)) {
                return false;
            }
        }

        return true;
    }
};
