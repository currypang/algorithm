function dfs(count, dungeons, visited, life) {
    let m = count;
    dungeons.forEach((dungeon, i) => {
      if(!visited[i] && dungeon[0] <= life) {
          visited[i] = 1;
          m = Math.max(m, dfs(count + 1, dungeons, visited, life - dungeon[1]));
          visited[i] = 0;
      }
    });
    
    return m;
}

function solution(k, dungeons) {
    const visited = new Array(dungeons.length).fill(0);
    const answer = dfs(0, dungeons, visited, k);
    return answer;
}