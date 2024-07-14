function solution(want, number, discount) {
    let answer = 0;
    const n = discount.length;
    const wantMap = new Map();

    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }
    const checkWindow = (windowMap) => {
        for (let [product, qty] of wantMap) {
            if (!windowMap.has(product) || windowMap.get(product) < qty) {
                return false;
            }
        }
        return true;
    }

    let windowMap = new Map();

    for (let i = 0; i < 10; i++) {
        if (windowMap.has(discount[i])) {
            windowMap.set(discount[i], windowMap.get(discount[i]) + 1);
        } else {
            windowMap.set(discount[i], 1);
        }
    }

    if (checkWindow(windowMap)) {
        answer++;
    }

    for (let i = 10; i < n; i++) {
        const outgoingElement = discount[i - 10];
        if (windowMap.get(outgoingElement) === 1) {
            windowMap.delete(outgoingElement);
        } else {
            windowMap.set(outgoingElement, windowMap.get(outgoingElement) - 1);
        }

        const incomingElement = discount[i];
        if (windowMap.has(incomingElement)) {
            windowMap.set(incomingElement, windowMap.get(incomingElement) + 1);
        } else {
            windowMap.set(incomingElement, 1);
        }
        if (checkWindow(windowMap)) {
            answer++;
        }
    }

    return answer;
}