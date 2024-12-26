let addTwoNumbers = function (l1, l2) {
    let n1 = "";
    let n2 = "";
    let l3 = [];

    for (let i = l1.length - 1; i >= 0; i--) {
        n1 = n1.concat(l1[i]);
    }
    for (let i = l2.length - 1; i >= 0; i--) {
        n2 = n2.concat(l2[i]);
    }

    
    n1 = parseInt(n1, 10);
    n2 = parseInt(n2, 10);

    let n3 = n1 + n2;

    while (n3 !== 0) {
        let r = n3 % 10;
        l3.push(r);
        n3 = Math.floor(n3 / 10);
    }

    return l3;
};

// example usage:
// let l1 = [2, 3, 4];
// let l2 = [4, 5, 6];
// console.log(addTwoNumbers(l1, l2)); 


// output:
// [6,8,0,1]
