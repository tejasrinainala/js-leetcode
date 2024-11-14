var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const gcdLength = gcd(str1.length, str2.length);
    return str1.substring(0, gcdLength);
};
