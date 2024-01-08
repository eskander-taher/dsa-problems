/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum1 = function (nums, target) {
	if (nums.length == 0 || nums.length == 1) return [];

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i == j) continue;
			if (nums[i] + nums[j] == target) return [i, j];
		}
	}

	return [];
};

var twoSum2 = function (nums, target) {
	const numIndices = new Map();

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];

		if (numIndices.has(complement)) {
			return [numIndices.get(complement), i];
		}

		numIndices.set(nums[i], i);
	}

	return [];
};

var twoSum3 = function (nums, target) {
	const sortedNums = nums.slice().sort((a, b) => a - b);
	let left = 0;
	let right = sortedNums.length - 1;

	while (left < right) {
		const currentSum = sortedNums[left] + sortedNums[right];

		if (currentSum === target) {
			// Map back to the original indices
			const index1 = nums.indexOf(sortedNums[left]);
			const index2 = nums.lastIndexOf(sortedNums[right]);
			return [index1, index2];
		} else if (currentSum < target) {
			left++;
		} else {
			right--;
		}
	}

	return [];
};

let t1 = performance.now();
console.log(twoSum1([2, 7, 11, 15], 9));
let t2 = performance.now();
console.log(t2 - t1);

let t3 = performance.now();
console.log(twoSum2([2, 7, 11, 15], 9));
let t4 = performance.now();
console.log(t4 - t3);

let t5 = performance.now();
console.log(twoSum3([2, 7, 11, 15], 9));
let t6 = performance.now();
console.log(t6 - t5);
