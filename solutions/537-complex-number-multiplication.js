/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    const { real: r1, imaginary: i1 } = extractInts(num1);
    const { real: r2, imaginary: i2 } = extractInts(num2);

    const realProd = (r1 * r2) - (i1 * i2);
    const imagProd = (r1 * i2) + (r2 * i1);
    return `${realProd}+${imagProd}i`;


    function extractInts(num) {
        const split = num.split("+");
        split[1] = split[1].substr(0, split[1].length - 1);

        return {
            real: Number(split[0]),
            imaginary: Number(split[1])
        };
    }
};
