var scanf = require('scanf');
console.log("Enter the size of the array:");
let size = scanf("%d");
let array=[];
for(i=0;i<size;i++)
{
    array[i]=scanf("%d");
}

for (j=0;j<size;j++)
{
   for(i=j+1;i>0;i--)
   {
       if(array[i]<array[i-1])
       {
           swap(array,i,i-1);
       }
   }
}


for(k=0;k<size;k++)
{
    console.log(array[k]);
}



function swap(arr,p1, p2) {
    temp=arr[p1];
    arr[p1]=arr[p2];
    arr[p2]=temp;
  }