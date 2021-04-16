/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                if (j === 0 || grid[i][j - 1] === 0) {
                    // First in array or left is a 0
                    perimeter++;
                }

                if (j === (grid[i].length - 1) || grid[i][j + 1] === 0) {
                    // Last in array or right is a 0
                    perimeter++;
                }

                if (i === 0 || grid[i - 1][j] === 0) {
                    // Top of column or above is a 0
                    perimeter++;
                }

                if (i === (grid.length - 1) || grid[i + 1][j] === 0) {
                    // Bottom of column or below is a 0
                    perimeter++;
                }
            }
        }
    }
    
    return perimeter;
}