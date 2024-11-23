// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
  


let mergeAlternately = function(word1, word2) {
    let merged = ""
    let maxLength=Math.max(word1.length,word2.length)
    for(let i=0;i<maxLength;i++)
    {
        if(i<word1.length)
        {
            merged+=word1[i]
        }
       if(i<word2.length)
       {
        merged+=word2[i]
       }
       
    }
    return merged;
};
