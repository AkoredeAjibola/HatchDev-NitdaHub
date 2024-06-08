function partition(array,p,r){
    let i = p-1
    let x = array[r] //pivot

for ( let j = p; j <= r -1; j++){
    if (array[j] <= x ){
        i++;
        [array[i],array[j]] = [array[j], array[i]]
    }
}
 
[array[i + 1], array[r]] = [array[r], array[i + 1]]; // Swap pivot to its correct position
return i + 1; // Return the partition index
}

function quickSort(array, p, r) {
    if (p < r ) {
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi = partition(array, p, r);
  
        // Separately sort elements before partition and after partition
        quickSort(array, p, pi - 1);
        quickSort(array, pi + 1, r);
    }
}

let array = [7,8,2,5]
let N = array.length 
quickSort(array, 0, N-1);
console.log("Sorted array:");
console.log(array.join(" "));