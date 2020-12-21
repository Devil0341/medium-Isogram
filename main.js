// Write your isogram function here
function isogram(word){

  
  for (let i = 0; i < word.length; i++){
    for (let j = i+1; j < word.length; j++){
    if (word[i] == word[j]){
  return false;
      }
      // in the first for loop i is the current letter and in 
      //the second for loop j is the second letter(j =i+1)
      //if statement compares i and j for consecutive or nonconsecutive repeate letters
    }
  }
  return true;
}

isogram('cow') // true
//console.log(isogram('hello'))
//console.log(isogram('cow'))
