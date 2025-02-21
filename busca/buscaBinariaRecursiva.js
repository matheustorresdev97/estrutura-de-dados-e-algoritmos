const buscaBinaria = (nums, key, low, high) => {
    if(low > high) {
        return -1;
        }
        
    const middle = Math.floor((low + high) / 2)
    if(key === nums[middle]) {
        return middle;
        }
    else if(key < nums[middle]) {
        return buscaBinaria(nums, key, low, middle -1);
        }
        else {
        return buscaBinaria(nums, key, middle + 1, high)
        }
};