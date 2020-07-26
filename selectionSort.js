function selectionSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        var indexOfSmallest = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[indexOfSmallest] > array[j]) {
                indexOfSmallest = j;
            }
        }
        var temp = array[i];
        array[i] = array[indexOfSmallest];
        array[indexOfSmallest] = temp;
    }
}


const array = [10, 15, 23, 2, 9, 28, 1, 36];
console.log(array);

selectionSort(array);

console.log(array);
