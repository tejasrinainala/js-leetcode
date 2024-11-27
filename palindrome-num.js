var isPalindrome = function(x) {
    let y=x.toString()
    let newar=[];
    let c=0;
    y=y.split();
    if(x<0)
    {
        return false;
    }
    for(let i=0; i<y.length; i++)
    {
        if(y[i]==y[y.length-1])
        {
            c++;
        }
    }
    if(c==0)
    {
        return false;
    }
    else
    {
        return true;
    }

};
