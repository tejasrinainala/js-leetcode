var kidsWithCandies = function (candies, extraCandies) {
    let resar = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= Math.max(...candies)) {
            resar.push(true)
        }
        else {
            resar.push(false)
        }
    }
    return resar;
};
