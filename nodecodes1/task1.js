//printing pyramid
pyramid="";
function drawPyramid(n){
  for(var i=0;i<n;i++){
    for(var j=0;j<=i+n-1;j++)
    {
      if(i+j>=n-1)
        pyramid+="*";
      else
        pyramid+=" ";
    }
    pyramid+="\n";
  }
  return(pyramid);
}
exports.drawPyramid = drawPyramid;