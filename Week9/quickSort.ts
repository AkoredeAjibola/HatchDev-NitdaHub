function partition(array,p,r){
    let i = p-1
    let x = array[r] //partvot

for ( let j = p; j <= r -1; j++){
    if (array[j] <= x ){
        i++;
        [array[i],array[j]] = [array[j], array[i]]
    }
}
 
[array[i + 1], array[r]] = [array[r], array[i + 1]]; // Swap partvot to its correct position
return i + 1; // Return the partition index
}

function quickSort(array, p, r) {
    if (p < r ) {
        // part is the partitioning index, arr[part] is now at the right place
        let part = partition(array, p, r);
  
        // Separately sort elements before partition and after partition
        quickSort(array, p, part - 1);
        quickSort(array, part + 1, r);
    }
}

let array = [7,8,2,5]
let N = array.length 
quickSort(array, 0, N-1);
console.log("Sorted array:");
console.log(array.join(" "));
