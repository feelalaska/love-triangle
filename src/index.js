/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  for (var i=0; i<preferences.length; i++) {
	  if ((preferences[i] != i+1)&&(preferences[i] != 0)) {
		  // i - position of 1th love-triangle element in array
		  var j = preferences[i]-1; //position of 2nd love-triangle element in array
		  var k = preferences[j]-1; //position of 3rd love-triangle element in array
		  if ((j+1 === preferences[i])&&(k+1 === preferences[j])&&(i+1 === preferences[k])) {
			  preferences[i] = 0;
			  preferences[j] = 0;
			  preferences[k] = 0;
			  count++;
    	}
	  }
  }
  return count;
};
