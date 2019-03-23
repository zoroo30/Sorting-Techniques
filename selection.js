/*
var scanf = require('scanf');
console.log("Enter the size of the array:");
let size = scanf("%d");
let array=[];
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

for (j=0;j<size;j++)
{
   let index=findMin(array,j,size);
   swap(array,index,j);
}

for(i=0;i<size;i++)
{
    console.log(array[i]);
}

function findMin(arr,p1, p2) {
    min=arr[p1];
    index=p1++;
    for(p1;p1<p2;p1++)
    {
        if(arr[p1]<min)
        {
            min=arr[p1];
            index=p1;
        }
    }
    return index;
  }

function swap(arr,p1, p2) {
    temp=arr[p1];
    arr[p1]=arr[p2];
    arr[p2]=temp;
  }