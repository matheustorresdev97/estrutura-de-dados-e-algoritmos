const mergeSort = (nums, left, right) => {
    if (left < right) {
        let middle = Math.floor((left + right) / 2);
        mergeSort(nums, left, middle);
        mergeSort(nums, middle + 1, right);
        merge(nums, left, middle, right);
    }
    return nums;
}

const merge = (nums, left, middle, right) => {
    const result = [];
    let i = left;
    let j = middle + 1;
    let k = 0;

    while (i <= middle && j <= right) {
         if (nums[i] < nums[j]) {
              result[k] = nums[i];
              i++;
         } else {
              result[k] = nums[j];
              j++;
         }
         k++;
    }

    while (i <= middle) {
        result[k] = nums[i];
        i++;
        k++;
    }


    while (j <= right) {
        result[k] = nums[j];
        j++;
        k++;
    }

    for (let m = 0; m < result.length; m++) {
        nums[left + m] = result[m];
    }
    
    return nums;
}
