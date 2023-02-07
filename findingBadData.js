/*  This function is named findingBadData.At first we check the parameter it is an array object or not.If it is an array,we count the how many negative numbers in the array and return the number    */
function findingBadData(ar){
if(Array.isArray(ar)==false)
return 'please enter a valid input'; 
else{
let cnt=0;
for(let i=0;i<ar.length;++i){
    if(ar[i]<0)++cnt;
}
return cnt;
}
}