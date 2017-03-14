//second largest no in array without library function
function secondLargest2(a){
  var l=a.length;
  for(i=0;i<=1;i++){
    for(j=0;j<l-2;j++){
      if(a[j]>a[j+1]){
        var temp=a[j];
        a[j]=a[j+1];
        a[j+1]=temp;
      }
    }
  }
  return(a[l-2]);
}
exports.secondLargest2 = secondLargest2;