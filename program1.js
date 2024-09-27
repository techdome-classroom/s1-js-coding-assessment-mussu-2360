function countIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    
    function dfs(i, j) {
        
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
            return;
        }

        
        grid[i][j] = 'W';

       
        dfs(i + 1, j); 
        dfs(i - 1, j); 
        dfs(i, j + 1); 
        dfs(i, j - 1); 
    }

    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            
            if (grid[i][j] === 'L') {
                islandCount++;
                dfs(i, j); 
            }
        }
    }

    return islandCount;
}


const map1 = [
    ["L", "L", "L", "L", "W"],
    ["L", "L", "W", "L", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
];
console.log(countIslands(map1)); 


const map2 = [
    ["L", "L", "W", "W", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "L", "W", "W"],
    ["W", "W", "W", "L", "L"],
];
console.log(countIslands(map2)); 
