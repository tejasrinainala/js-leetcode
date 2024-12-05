// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

let lengthOfLastWord = function(s) {
    let words = s.trim().split(" ")
    return words[words.length-1].length;
};
