const buscaSequencial = (nums, key) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == key) {
            return i;
        }
        return -1
    }
}

buscaSequencial([28, 6, -2, 9, 16, 20, 23, 8], 20)