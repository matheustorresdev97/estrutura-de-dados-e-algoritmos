const buscaBinaria = (nums, key) => {
	let low = 0;
	let middle;
	let high = nums.length -1;
	
	while(low <= high) {
		middle = Math.floor((low + high) / 2)
		if(key < nums[middle])
			high = middle - 1;
		else if(key > nums[middle])
			low = middle + 1
		else 
			return middle;
		}
		
		return -1;
	};