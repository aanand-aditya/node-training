//returning frequency of all alphabet in a string
function alphaFreq(s){
  var l=s.length;
  var map={};
  for(var i=0;i<l;i++){
    var ch=s.charAt(i);
    if(ch in map)
      map[ch]++;
    else
      map[ch]=1;
  }
  return(map);
}
exports.alphaFreq = alphaFreq;