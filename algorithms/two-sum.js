//todo: brute force

//todo: binary search (sort array, then it's kindof like git bisect. Need to read more)

// using a hash table
const twoSum = (nums, target) => {
  let hashTable = {};
  // array destructuring to get index and item
  for (let [index, num] of nums.entries()) {
    if (hashTable[num] !== undefined) return [hashTable[num], index];
    hashTable[target - num] = index;
  }
};
