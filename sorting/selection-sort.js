// Selection Sort - Javascript

var arr = [9, 7, 1, 2, 4, 5, 2, 1 , 3];

for (var i = 0; i < arr.length; i++) {

    minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    if (minIndex != i) {
		[ arr[i], arr[minIndex] ] = [ arr[minIndex], arr[i] ];
    }
}

console.log(arr);
