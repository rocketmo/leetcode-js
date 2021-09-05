/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters = function(properties) {
    properties.sort(([aAtk, aDef], [bAtk, bDef]) => {
        if (aAtk === bAtk) {
            return bDef - aDef;
        }

        return bAtk - aAtk;
    });

    let ans = 0;
    let currMaxDef = properties[0][1];
    let prevMaxDef = 0;

    for (let i = 1; i < properties.length; i += 1) {
        const [ atk, def ] = properties[i];
        const [ prevAtk, prevDef] = properties[i - 1];

        if (atk === prevAtk) {
            if (def < prevMaxDef) {
                ans += 1;
            } else if (def > currMaxDef) {
                currMaxDef = def;
            }
        } else {
            if (def < currMaxDef) {
                ans += 1;
                prevMaxDef = currMaxDef;
            } else if (def > currMaxDef) {
                prevMaxDef = currMaxDef;
                currMaxDef = def;
            } else {
                prevMaxDef = currMaxDef;
            }
        }
    }

    return ans;
};
