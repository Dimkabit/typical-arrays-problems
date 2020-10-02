
exports.min = function min (array) { 
 return Math.min(...array);
  }
  
 


exports.max = function max (array) {
  if ((array) === 0) {
    return 0;
  } else {  
    return Math.max(...array); 
  }
  
}

exports.avg = function avg (array) {
  if(array.length == 'undefined') {
    return 0;
  }
  return array.reduce((a, b) => (a + b)) / array.length; 
  
}
