/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var summ = 0;   
  for (i = 0; i<preferences.length; i++) { 
    let k = preferences[i] - 1;
    if (k == i) continue;
    let n = preferences[k] - 1;
    if (k == n) continue;
    let m = preferences[n] - 1;
    if (n == m) continue;
    if (m==i) {
        summ++;
      }        
  }
  return summ/3;
};
