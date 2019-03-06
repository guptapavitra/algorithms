// Merge Sort - Javascript.

function mergeSort(arr) {
	if (arr.length <= 1) {
		return;
	}

	var L = arr.slice(0, Math.ceil(arr.length/2))
	var R = arr.slice(Math.ceil(arr.length/2), arr.length)

	mergeSort(L);
	mergeSort(R);

	var i = j = k = 0;

	while (i < L.length && j < R.length) {
		if (L[i] < R[j]) {
			arr[k] = L[i]
			i++
			k++
		} else {
			arr[k] = R[j]
			j++
			k++
		}
	}

	while (i < L.length) {
		arr[k] = L[i]
		i++
		k++
	}

	while (j < R.length) {
		arr[k] = R[j]
		j++
		k++
	}
}

// Driver Code.
arr = [3, 4, 7, 2, 1, 4, 9, 8]
mergeSort(arr)
console.log(arr)
