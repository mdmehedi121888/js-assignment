/*  gemsToDiamond function have 3 parameters and all the parameters are must be number type of data.Simply calculate  firstFriendGems multiply by 21,secondFriendGems multiply by 32,thirdFriendGems multiply by 43. The totalGems if greater or equal 2000 then we subtract the totalGems by 2000 otherwise we return the totalGems */
function gemsToDiamond(firstFriendGems,secondFriendGems,thirdFriendGems){
    if(typeof(firstFriendGems)=='number' && typeof(secondFriendGems)=='number' && typeof(thirdFriendGems)=='number'){
        let totalGems = firstFriendGems*21 + secondFriendGems*32 + thirdFriendGems*43;
    if(totalGems>=(2*1000)){
        return totalGems-2000;
    }
    else
    return totalGems;
    }
    else
    return 'please enter a valid input'; 
    
}
