// We have two special characters:

// The first character can be represented by one bit 0.
// The second character can be represented by two bits (10 or 11).
// Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.





let isOneBitCharacter = function(bits) {
    let i=0;
    while(i<bits.length-1)
        {
            if(bits[i]===1)
                {
                    i+=2;
                }
            else
                {
                    i+=1;
                }
        }
    return i===bits.length-1
};
