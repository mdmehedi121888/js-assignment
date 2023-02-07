/*  isLGSeven function takes a number type input from the user and if the number7 is less then 7 then return number-7 otherwise it return double of the number    */
function isLGSeven(num){
    if(typeof(num)!='number')
    return 'please enter a valid input';
    else{
        if(num-7<7)
        return num-7;
        else
        return num*2;
    }
}