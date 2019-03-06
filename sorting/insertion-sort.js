// Insertion Sort - Javascript

var arr = [4, 5, 6, 2, 1];

for (var i = 1; i < arr.length ; i++) {
	var mover = i;
	for (var j = i -1 ; j >= 0 ; j-- ) {
		if (arr[j] > arr[mover] ) {
			[arr[j], arr[mover]] = [arr[mover], arr[j]];
			mover = j;
		}
	}
}

console.log(arr);
