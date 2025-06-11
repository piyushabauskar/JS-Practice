function highestFloor(N, M, startPoints, endPoints) {
  // Step 1: Build the graph
  const graph = new Map();

  for (let i = 0; i < M; i++) {
    let start = startPoints[i];
    let end = endPoints[i];
    if (!graph.has(start)) {
      graph.set(start, []);
    }
    if (!graph.has(end)) {
      graph.set(end, []);
    }
    graph.get(start).push(end);
    graph.get(end).push(start);
  }

  // Step 2: BFS to find the highest floor reachable
  const visited = new Set();
  const queue = [1]; // Start from floor 1
  let maxFloor = 1;

  while (queue.length > 0) {
    const floor = queue.shift(); // Dequeue the current floor
    if (visited.has(floor)) {
      continue;
    }
    visited.add(floor); // Mark floor as visited
    maxFloor = Math.max(maxFloor, floor); // Update the maximum reachable floor

    // Add neighbors (connected floors) to the queue
    for (const neighbor of graph.get(floor)) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return maxFloor;
}

// Example usage:
const N = 10; // Total floors
const M = 3; // Number of elevators
const startPoints = [1, 3, 5]; // Starting points of elevators
const endPoints = [5, 6, 10]; // Ending points of elevators

console.log(highestFloor(N, M, startPoints, endPoints)); // Output: 10
