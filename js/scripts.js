toArray = function (str) {
  return str.trim().split(" ");
};

function isVowel(x) { 
  return ("aeiouAEIOU".indexOf(x) != -1);
}

$(document).ready(function() {
  $("button#start").click(function() {
    const inputValue = $("#formResponse").val();
    const outputArray = toArray(inputValue);
    // let finalString = " ";
    let i = 0;

    outputArray.forEach(function(word) { 

      if(isVowel(word))
      {
        outputArray[i] = outputArray[i] + "-way";
      }
      else {
        outputArray[i] = outputArray[i] + "-ay";
      }
      i++;
    });

    console.log(outputArray);
  });
});

// [X] For words beginning with a vowel, add "way" to the end.
// [ ] For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
// [ ] If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
// [ ] For words beginning with "y", treat "y" as a consonant.