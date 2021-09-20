const _ = require("lodash");

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    // Generate an array from 1 to n
    const vals = [];
    for (let i = 1; i <= n; i += 1) {
        vals.push(i);
    }

    return helper(vals);


    // Returns all possible BSTs given an array of sorted values
    function helper(vals) {
        if (vals.length === 0) {
            return [];
        }

        const treeList = [];
        for (let i = 0; i < vals.length; i += 1) {
            const currTrees = [];
            const currVal = vals[i];

            // Split the array around the current value
            const leftVals = vals.slice(0, i);
            const rightVals = vals.slice(i + 1, vals.length);

            // Get all possible left and right sub-trees
            const leftTrees = helper(leftVals);
            const rightTrees = helper(rightVals);

            // Create all possible sub-trees with just the left sub-trees
            const tmpTrees = [];
            if (!leftTrees.length) {
                tmpTrees.push(new TreeNode(currVal));
            } else {
                for (let j = 0; j < leftTrees.length; j += 1) {
                    const newRoot = new TreeNode(currVal);
                    newRoot.left = leftTrees[j];
                    tmpTrees.push(newRoot);
                }
            }

            // Now, append all possible right sub-trees to the sub-trees created previously
            for (let j = 0; j < tmpTrees.length; j += 1) {
                if (!rightTrees.length) {
                    currTrees.push(tmpTrees[j]);
                } else {
                    for (let k = 0; k < rightTrees.length; k += 1) {
                        // Clone the previous tree since we may need to re-use it later in the loop
                        const root = _.cloneDeep(tmpTrees[j]);
                        root.right = rightTrees[k];
                        currTrees.push(root);
                    }
                }
            }

            // Push all new trees onto our tree list
            treeList.push(...currTrees);
        }

        return treeList;
    }
};
