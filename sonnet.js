// place contents of the sonnet div in a variable
var sonnet = document.getElementById("sonnet").innerHTML;

// find + output the starting position of the word "orphans"
console.log("Starting position of 'orphans':", sonnet.indexOf("orphans"))

// output the number of characters in the sonnet.
console.log("Sonnet #/characters:", sonnet.length);

// replace the first occurance of the string "winter" with "yuletide".
// replace all occurances of the string "the" with "a large".
// set the content of the sonnet div with the new string.
function replaceText(sonnet) {
    sonnet = sonnet.replace("winter", "yuletide");
    sonnet = sonnet.replace(/the /gi, "a large ");
    document.getElementById("sonnet").innerHTML = sonnet;
};
replaceText(sonnet);


// console.log(sonnet.replace("winter", "yuletide"));
// console.log(sonnet.replace(/the /gi, "a large "));