var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (string[left] !== string[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
