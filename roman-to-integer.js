var romanToInt = function(s) {
    let res = 0;
    let dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    for (let i = 0; i < s.length; i++) {
        let current = dict[s[i]];
        let next = dict[s[i + 1]];

        if (next > current) {
            res -= current;
        } else {
            res += current;
        }
    }
    return res;
};
