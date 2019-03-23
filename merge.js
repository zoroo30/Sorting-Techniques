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

divide(array,0,size-1);
console.log('');
for(i=0;i<size;i++)
{
    console.log(array[i]);
}

function swap(arr,p1, p2) {
    temp=arr[p1];
    arr[p1]=arr[p2];
    arr[p2]=temp;
}

function divide(arr,start,end)
{
    if(start>=end)
    {
        return;
    }
    let m=Math.floor(((start+end)-1)/2);
    divide(arr,start,m);
    divide(arr,(m+1),end);
    merge(arr,start,m,end);
}

function merge(arr,start,m,end){   
    if(start==end)
    {
        return;
    }
    
    let i=start;
    let j=m+1;
    let part=[];
    let iterator;
    let A=0;
    let B=0;
    for(iterator=0;iterator<end+start+1;iterator++)
    {
        if(arr[i]<arr[j])
        {
            part[iterator]=arr[i++];
        }
        else
        {
            part[iterator]=arr[j++];
        }
        if(i>m)
        {
            A=1;
            iterator++;
            break;
        }
        if(j>end)
        {
            B=1;
            iterator++;
            break;
        }
    }
    if(A==1)
    {
        for(j;j<=end;j++)
            part[iterator++]=arr[j];
    }
    
    if(B==1)
    {
        for(i;i<=m;i++)
            part[iterator++]=arr[i];
    }
    let ij;
    let k=0;
    for(iterator=start;iterator<end+1;iterator++)
    {
        arr[iterator]=part[k++];
    }
    return;
}