// Initial Solution
/*
function solution(A) {
  for (var i = 1; i <= A.length + 1; i++) {
    if (!A.includes(i)) {
      return i;
    }
  }
}
*/

// Final solution
function solution(A) {
  let hash = {};
  for (let val in A) {
    hash[val] = val;
  }

  for (var i = 1; i <= A.length + 1; i++) {
    if (hash[i] === undefined) {
      return i;
    }
  }
}

/*
  Explanation: when the size of A grows to be very large, object key lookup performs better
  compared to Array.prototype.includes, which is why creating a "hash table" passes Codility's tests.
*/
