/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const anagramsMap = {};

    for (const word of strs) {
        const sortedWord = word.split('').sort().join('');
        if (anagramsMap[sortedWord]) {
            anagramsMap[sortedWord].push(word);
        } else {
            anagramsMap[sortedWord] = [word];
        }
    }

    return Object.values(anagramsMap);
}