export const shuffleWord = (word: string): string => {
    const wordArray: string[] = word.split("");
    for(let i = wordArray.length - 1; i > 0; i--) {
        let j:number = Math.floor(Math.random() * (i +1));
        let temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;   
    }
    return wordArray.join("")
}
