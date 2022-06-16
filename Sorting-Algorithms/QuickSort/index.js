const list = [1, 3, 22, 8, 9, 9, 7, 4, 3, 10]

function merge(left, right) {
    const arr = [];

    while (left.length && right.length) {
        const item = left[0] < right[0] ? left.shift() : right.shift();
        arr.push(item);
    }

    return [...arr, ...left, ...right];
}


function mergeShort(array) {
    const half = array.length / 2;
    if (array.length < 2) {
        return array;
    }

    const left = array.splice(0, half);
    return merge(mergeShort(left), mergeShort(array));
}
const result = mergeShort(list1, list2) 
console.log(result) // 1, 3, 3, 4, 7, 8, 9, 9, 10, 22;