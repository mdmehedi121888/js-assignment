/*  The function name is the mindGame function.It takes an input from the user if the input is not valid it show a message to request the user take a valid input. It returns a mathematical calculation   */
function mindGame(num){
if(typeof(num)!= 'number' || num<0)
return 'please enter a valid input';
else{
    return (((num*3)+10)/2)-5;
} 
}