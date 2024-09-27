function getTotalIsles(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    // Depth-First Search (DFS) function to explore connected land
    function dfs(i, j) {
        // Base case: Stop DFS if out of bounds or at water
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
            return;
        }

        // Mark current landmass as visited by setting it to 'W'
        grid[i][j] = 'W';

        // Explore all four possible directions: up, down, left, right
        dfs(i + 1, j); // down
        dfs(i - 1, j); // up
        dfs(i, j + 1); // right
        dfs(i, j - 1); // left
    }

    // Traverse each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If we find an unvisited landmass ('L'), start DFS
            if (grid[i][j] === 'L') {
                islandCount++;
                dfs(i, j); // Explore the entire island
            }
        }
    }

    return islandCount;
}

module.exports = getTotalIsles;

