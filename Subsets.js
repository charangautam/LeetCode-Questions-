/**
 * @param {number[]} nums
 * @return {number[][]}

    input = [1,2,3]
    result = []
 
                                    []
                                /       \
                            [1]               []                    i = 0
                        /       \          /     \
                   [1,2]          [1]     [2]      []               i = 1
                /        \        / \     /  \      /\
            [1,2,3]     [1, 2] [1,3] [1] [2,3] [2] [3] []           i = 2
            
    
    base cases:
    - if (i > input.length), push build into output arr
    recursive cases:
    - helper(output.push(input[i]), i + 1)
    - helper(output, i + 1)
*/
var subsets = function (nums) {
    let output = []

    // helper function
    const helper = (build, i) => {
        // base case
        if (i >= nums.length) {
            output.push(build)
            return
        }

        //recursive cases
        helper([...build, nums[i]], i + 1)
        helper(build, i + 1)
    }
    helper([], 0)
    return output
};

// second solution with a for loop
var subsets = function (nums) {
    let output = []

    const helper = (build, index) => {
        output.push(build)

        for (let i = index; i < nums.length; i++) {
            helper([...build, nums[i]], i + 1)
        }
    }
    helper([], 0)
    return output
};
