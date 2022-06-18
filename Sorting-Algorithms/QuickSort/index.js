var arr = [10, 80, 30, 90, 40, 50, 70]
var high = arr.length;

function quickSort(arr, low, high) {

    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)
    }
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let index = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            index++;
            swap(arr, index, j)
        }
    }
    swap(arr, index + 1, high);
    return (index + 1)

}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
quickSort(arr, 0, high - 1)
console.log(arr);