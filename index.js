const { readFile } = require('fs').promises;

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;
  
  words.forEach(word => {
    tally[word] = (tally[word] || 0) + 1 ;
    if(!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
}

const findPassword = async () => {
  // Your code goes here
  const poem1 = await readFile("poems/starting-poem.txt", "utf-8");
  const poem2name = `poems/${mostFrequentWord(poem1)}.txt`;
  const poem2 = await readFile(`poems/${poem2name}.txt`, `utf-8`);
  const poem3name = `poems/${mostFrequentWord(poem2)}.txt`;
  const poem3 = await readFile(`poems/${poem3name}.txt`, `utf-8`);
  const password = mostFrequentWord(poem3);
  console.log(password);
}

findPassword();
