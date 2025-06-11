// input is any positive non zero number 1-N
// find valid  Permulations for an array of size N (1 based index) such that'
// A[i]%i=0 or i%A[i]=0
// return number of possible permutations

function numOfPerm(n) {
  let count = 0;

  const backtrack = (index, visited) => {
    if (index > n) {
      count++;
      return;
    }

    for (let num = 1; num <= n; num++) {
      if (!visited[num] && (num % index === 0 || index % num === 0)) {
        visited[num] = true; // Mark number as used
        backtrack(index + 1, visited); // Recurse for next index
        visited[num] = false; // Backtrack
      }
    }
  };

  backtrack(1, Array(n + 1).fill(false)); // Start from index 1
  return count;
}

console.log(numOfPerm(4)); // Output: Number of valid permutations
