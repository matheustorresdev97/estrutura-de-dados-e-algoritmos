const bubbleSort = (nums) => {
	const N = nums.length;
	for(let i = 0; i < N; i++) {
		let swapped = false;
		for (let j = 0; j < N - 1 - i; j++) {
			if(nums[j] > nums[j + 1]) {
				const aux = nums[j]
				nums[j] = nums[j + 1]
				nums[j + 1] = aux;
			}
		}
		if(!swapped) {
			break;
		}
	}
	
	return nums;
}

const swap = (nums, a, b) => {
	const aux = nums[a]
    nums[a] = nums[b]
    nums[b] = aux
}