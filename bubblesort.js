const array = [10,4,6,7,7,8,0,1,6,9];
console.log("Actual Array : ");
console.log(array);

for(let i = 0 ,size = array.length;i < array.length - 1 ; i++){
    for (let j = 0 ; j < size - 1; j++){
        if(array[j] > array[j + 1]){
            const temp = array[j];
            array[j] = array[j+1];
            array[j +1] = temp;
        }
    }
}

console.log("Sorted Array : ");
console.log(array);