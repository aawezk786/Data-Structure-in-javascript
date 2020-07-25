const array = [3,5,6,4,233,2,33,44,12,10,11,15];
console.log("Unsorted Array : ");
console.log(array);
function binary_search(arr, value){
    let high = arr.length - 1;
    let low = 0 ;
    let mid = 0;

    while(low <= high){
        mid = Math.floor((high + low) / 2);
        if(arr[mid] == value){
            return arr[mid];
        }else if(value > arr[mid]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1
}

let sorted = array.sort(function(a,b){
    return a-b
});
console.log("Sorted Array : ");
console.log(sorted);

// let foundNo = binary_search(sorted,15);

// console.log(foundNo);