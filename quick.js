/*var scanf = require('scanf');
console.log("Enter the size of the array:");

let size=scanf("%d");
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

quickSort(array,0,size-1);

for(i=0;i<size;i++)
{
    console.log(array[i]);
}

function quickSort(arr,start,end)
{
    if(end<=start)
        return;
    let pivot=quickPass(arr,start,end);
    quickSort(arr,start,pivot-1);
    quickSort(arr,pivot+1,end);
}

function quickPass(arr,start,end)
{
    let pivot=Math.floor(Math.random()*(end-start+1))+start;
    let i=start-1;
    let j=start;
    swap(arr,pivot,end);
    for(j;j<end;j++)
    {
        if(arr[end]>=arr[j])
        {
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr,end,i+1);
    return i+1;
}

function swap(arr,p1, p2) {
    temp=arr[p1];
    arr[p1]=arr[p2];
    arr[p2]=temp;
}