//var scanf = require('scanf');
//console.log("Enter the size of the array:");
/*
for(i=0;i<size;i++)
{
    array[i]=scanf("%d");
}
*/
let size =Math.floor(Math.random()*(1000+1)) +1;
let array=[];
for(i=0;i<size;i++)
{
    array[i]=Math.floor(Math.random()*(1000+1));
}
let start = new Date().getTime();
for (j=0;j<size-1;j++)
{
    for(i=0;i<size-1-j;i++)
    {
        if(array[i]>array[i+1])
        {
            swap(array,i,i+1);
        }
    }
}
//console.timeEnd("end");
let end=new Date().getTime();
for(i=0;i<size;i++)
{
    console.log(array[i]);
}
let time = end - start; 
console.log(`completed in ${time} seconds`);

function swap(arr,p1, p2) {
    temp=arr[p1];
    arr[p1]=arr[p2];
    arr[p2]=temp;
}