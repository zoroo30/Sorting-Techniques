//var scanf = require('scanf');
//console.log("Enter the size of the array:");
/*
for(i=0;i<size;i++)
{
    array[i]=scanf("%d");
}
*/
let size =Math.floor(Math.random()*(20+1)) +1;
let array=[];
for(i=0;i<size;i++)
{
    array[i]=Math.floor(Math.random()*(1000+1));
}
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

for(i=0;i<size;i++)
{
    console.log(array[i]);
}

function swap(arr,p1, p2) {
    temp=arr[p1];
    arr[p1]=arr[p2];
    arr[p2]=temp;
  }