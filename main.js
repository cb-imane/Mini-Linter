let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let storyWords = story.split(' ');
console.log(storyWords.length);
//filter out the unnecessary words from storyWords array
let betterWords = storyWords.filter(word => !(unnecessaryWords.includes(word)));

console.log(betterWords.length)

// let the user of your program know how many times they have used these overused words
let reallyCount = 0;
let basicallyCount = 0;
let veryCount = 0;
 for (i=0; i<storyWords.length; i++){
   if (storyWords[i] === 'really'){
     reallyCount +=1;
   } else if (storyWords[i] === 'very'){
     veryCount +=1;

   } else if (storyWords[i] === 'basically') {
     basicallyCount +=1;

   }
 }
 
countSentence= 0;
sentences = story.replace (/(\.|\!)/gm, "$").split('$');
console.log(sentences)
console.log(`Il y a ${sentences.length-1} phrases`);
//another method to count sentences
countSentences = 0;
for (word of storyWords){
  if ((word[word.length-1]=== '.') || (word[word.length-1]=== '!'))
  {
  countSentences+= 1;

  }
}
//console.log( 'There is ' + countSentences+ 'sentence')

function countThings() {
  console.log('The word count is'+ storyWords.length);
  console.log('The sentence count is' + countSentences);
console.log('The number of times the word really appears'+ reallyCount );
  console.log('The number of times each overused very word appears ' + veryCount );
   console.log('The number of times the word basically appears' + basicallyCount);

console.log(betterWords.join(' '));
}