// Function to check if we can partition donations into two subsets with a given sum
function canPartition(arr, target) {
  if (target === 0) return true;
  if (target < 0) return false;

  const sums = new Set([0]); // Initialize with the base case: sum = 0

  for (let num of arr) {
    const newSums = new Set(sums); // Copy existing sums
    for (let s of sums) {
      const newSum = s + num;
      if (newSum === target) return true; // Early return if target is found
      if (newSum < target) newSums.add(newSum); // Add valid new sums
    }
    sums.clear();
    for (const sum of newSums) sums.add(sum);
  }

  return false;
}

// Recursive function to count divisions
function maxDivisionsHelper(arr, target) {
  if (!canPartition(arr, target)) return 0;

  // Find one valid partition
  let remainingTarget = target;
  let used = Array(arr.length).fill(false);
  for (let i = 0; i < arr.length; i++) {
    if (!used[i] && arr[i] <= remainingTarget) {
      remainingTarget -= arr[i];
      used[i] = true;
      if (remainingTarget === 0) break;
    }
  }

  // Remove the used elements and continue with the rest of the array
  const remainingArray = arr.filter((_, index) => !used[index]);
  return 1 + maxDivisionsHelper(remainingArray, target / 2);
}

// Main function to count maximum divisions
function maxDivisions(N, A) {
  const totalSum = A.reduce((acc, val) => acc + val, 0); // Calculate total sum
  if (totalSum % 2 !== 0) return 0; // Odd total sum cannot be divided
  return maxDivisionsHelper(A, totalSum / 2);
}

// Example usage
const A1 = [8, 0, 0, 0, 2, 2, 2, 2];
console.log(maxDivisions(8, A1)); // Output: 3

const A2 = [20, 2, 1, 1, 3, 1];
console.log(maxDivisions(6, A2)); // Output: 0

const A3 = [10, 15, 8, 8, 9];
console.log(maxDivisions(5, A3)); // Output: 1
