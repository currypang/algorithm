function solution(today, terms, privacies) {
    let answer = [];
    
    const todayDate = new Date(today.split('.').join('-'));
    const termMap = {};
    terms.forEach(term => {
        const [key, value] = term.split(' ');
        termMap[key] = parseInt(value);
    });

    privacies.forEach((privacy, index) => {
        const [date, termType] = privacy.split(' ');
        const collectedDate = new Date(date.split('.').join('-'));
        
        collectedDate.setMonth(collectedDate.getMonth() + termMap[termType]);
        
        if (collectedDate <= todayDate) {
            answer.push(index + 1);
        }
    });
    
    return answer;
}