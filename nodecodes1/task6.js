//returning object property name
function propName(obj){
  var a=[];
  for(var prop in obj)
    a.push(prop);
  return a;
}
exports.propName = propName;