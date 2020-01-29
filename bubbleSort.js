const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    for (let i = 1; i <= array.length; i++) {
        for (let j = 1; j <= array.length; j++) {
            if (array[i] < array[j - 1]) { //swap numbers
                [array[j - 1], array[i]] = [array[i], array[j - 1]];
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);