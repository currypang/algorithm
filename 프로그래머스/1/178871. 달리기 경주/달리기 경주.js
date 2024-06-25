function solution(players, callings) {
    const indexList = new Map()

    for (let i = 0; i < players.length; i++ ) {
        indexList.set(players[i], i)
    }

    for (const name of callings) {
        const called = name
        const passed = players[indexList.get(name) - 1]

        const temp = players[indexList.get(called) - 1]
        players[indexList.get(called) - 1] = players[indexList.get(called)];
        players[indexList.get(called)] = temp;

        indexList.set(called, indexList.get(called) - 1)
        indexList.set(passed, indexList.get(passed) + 1)
    }

    return players;
}