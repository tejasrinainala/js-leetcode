// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


  
  
  let strStr = function (haystack, needle) {
    if (haystack.includes(needle)) {
        return haystack.indexOf(needle)
    }
    else {
        return -1
    }
};
