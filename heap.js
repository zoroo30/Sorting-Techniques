//var scanf = require('scanf');
/*
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

for(i=0;i<size;i++)
{
    console.log(array[i]);
}
let sorted=[];
heapSort();

for(i=0;i<size;i++)
{
    console.log(sorted[i]);
}

function maxHeapify(node)
{   if(node*2>size)
        return;
    let child1=array[node*2+1];
    let child2=array[node*2+2];
    if((node*2+1)>size-1)
    {
        child1=0;
    }
    if((node*2+2)>size-1)
    {
        child2=0;
    }
    let bigger=child2;
    let index=node*2+2;
    if(child1>bigger)
    {
        bigger=child1;
        index=node*2+1;
    }
    if(bigger>array[node])
    {
        swap(array,node,index);
    }
    else
        return;
    maxHeapify(index);
    
}

function buildMaxHeap()
{
    for(i=(size-2)/2;i>-1;i--)
    {
        maxHeapify(Math.floor(i));
    }
}

function heapSort()
{
    let i=0;
    for(i;i<size;i++)
    {
        buildMaxHeap();
        sorted[i]=array[0];
        array[0]=0;
    }
    let stop=Math.floor(size/2);
    for(i=0,j=size-1;i<stop;i++,j--)
    {
        swap(sorted,i,j);
    }
}
function swap(arr,p1, p2) {
    temp=arr[p1];
    arr[p1]=arr[p2];
    arr[p2]=temp;
}

