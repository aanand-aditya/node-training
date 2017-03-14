function secondLargest1(ar){
  ar.sort(function(a, b){return b-a});
  return(ar[1]);
}
exports.secondLargest1 = secondLargest1;