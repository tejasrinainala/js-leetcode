var reverseWords = function(s) {
    
    let strings = s.trim().split(/\s+/);
    
    return strings.reverse().join(' ');
};
