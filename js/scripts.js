toArray = function (str) {
  return str.trim().split(" ");
};

function isVowel(x) { 
  return ("aeiouAEIOU".indexOf(x) != -1);
}

function breakWord(word) {
  return word.split("");
}

$(document).ready(function() {
  $("button#start").click(function() {
    const inputValue = $("#formResponse").val();
    const outputArray = toArray(inputValue);
    // let finalString = " ";
    let i = 0;

    outputArray.forEach(function(word) {                // Takes sentence and operates on each word
      if(isVowel(word)) {                               // If the word starts with a vowel
        outputArray[i] = outputArray[i] + "-way";       // Append "-way" to the word and return it to the array
      }
      else {                                            // If the word does NOT start with a vowel
                                                        // Find when there IS a vowel
                                                        // At the point of a vowel, get all consonants BEFORE that
                                                        // Remove the consonants and append to back
      }
      i++; // don't delete
    });

    console.log(outputArray); // output the final array to console
  });
});

// [X] For words beginning with a vowel, add "way" to the end.
// [ ] For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
// [ ] If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
// [ ] For words beginning with "y", treat "y" as a consonant.