
function swap(arr, a, b)
{
    const input = arr[a];
    arr[a] = arr[b];
    arr[b] = input;
}


function selectionSort(arr) 
{
    const n = arr.length
    let i, j, min_idx;

    for (i = 0; i < n-1; i++)
    {
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;

   
        swap(arr,min_idx, i);
    }
    return arr;
}
console.log(selectionSort([7,2,8,5]))
    