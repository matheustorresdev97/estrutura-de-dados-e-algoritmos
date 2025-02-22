const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1
        let temp = nums[i]
        while (j >= 0 && nums[j] > temp) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = temp
    }
    return nums
}

const nums = [4, 2, 8, 1, 5, 3]
console.log(insertionSort(nums)) // [1, 2, 3, 4, 5, 8]

