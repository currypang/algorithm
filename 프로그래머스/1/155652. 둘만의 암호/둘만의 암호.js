function solution(s, skip, index) {
    
    let answer = ''
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const validChars = alphabet.filter(char => !skip.includes(char));

    for (const char of s) {
        const currentIndex = validChars.indexOf(char);
        
        const newIndex = (currentIndex + index) % validChars.length;
        
        answer += validChars[newIndex];
    }

    return answer;
}
