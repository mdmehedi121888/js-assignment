/*  The is the evenOdd function.It takes an string input from the user if the input is not valid it show a message to request the user take a valid input.Calculates the total length of the string.If the string is even it returns even otherwise return odd   */
function evenOdd(str){
    if(typeof (str)!='string')
    return 'please enter a valid input';
    else{
        let stringLength = str.length;
        if(stringLength%2==0)
        return 'even';
        else
        return 'odd';
    }
}