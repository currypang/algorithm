function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((priority, index) => ({
        priority: priority,
        index: index
    }));

    while (queue.length > 0) {
        let current = queue.shift();
        if (queue.some(process => process.priority > current.priority)) {
            queue.push(current);
        } else {
            answer += 1;
            if (current.index === location) {
                return answer;
            }
        }
    }
}