let map = function(arr, fn) {
    let returnArr=[];
    for (let i=0;i<arr.length;i++){
        returnArr.push(fn(arr[i], i));
    }
    return returnArr;
    
};
