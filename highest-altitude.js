var largestAltitude = function(gain) {
    let al=[0]
    let s=0
    for(let i=0;i<gain.length;i++)
    {
        s=s+gain[i]
        al.push(s)
    }
    return Math.max(...al)
};
