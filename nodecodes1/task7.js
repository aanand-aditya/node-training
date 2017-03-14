//returning value of property name
function valueOfName(arr){
  var l=arr.length;
  var a=new Array(l);
  for(var i=0;i<l;i++){
    a[i]=arr[i].name;
  }
  return(a);
}
exports.valueOfName = valueOfName;