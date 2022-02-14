// slow brute force
const bruteTwoSum = (nums, target) => {
  // find out if there are two nums in array that add to target
  // if there are, return their indexes
  // iterate over nums twice, adding nums[i] and nums[j], returning indexes if sums to target
  let len = nums.length;
  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= len; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

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

const testTwoSum = (nums, target) => {
  // create an obj to store what we've already iterated over
  // iterate over nums
  // subtract current number from target to get the addend we need
  // check obj to see if that num is in there, if it is, return the two indexes
  // add num at current index to obj with key of the num, and value of it's index
  // return false if nothing found
  const lookup = {};
  const len = nums.length;
  for (let i = 0; i <= len; i++) {
    let hopefulAddend = Math.abs(nums[i] - target);
    if (lookup[hopefulAddend] !== undefined) return [lookup[hopefulAddend], i];
    lookup[hopefulAddend] = i;
  }
};

const arr = [0, 1, 2, 3, 4, 5, 6];

console.log(testTwoSum(arr, 9));
