
function alphaFreq(s){
  var a='a';
  var ar=new Array(26);
  ar.fill(0);
  for(var i=0;i<s.length;i++){
    var ch=s.charCodeAt(i);
    ar[ch-97]+=1;
  }
  return ar;
}

function doubleNos(ar){
  console.log(ar.map(function(n){return n*2}));
}
function evenNos(ar){
 return ar.filter(function(n){return n%2==0});
}

let s="";
function flattenJson(obj,s){
    if(s == undefined)
      s="";
    if(typeof(obj) !== 'object')
        {
          return (console.log(s+" "+obj));    
        } 

    for(key in obj) {
    if(obj.hasOwnProperty(key)) {
      
       s=s+key+".";
       
       flattenJson(obj[key],s);
       if(typeof(obj[key]) !== 'object')
        {
          
          var str=s.split(key);
          s=str[0];
         
        }
       
    }
    

}


}
/*
{
  "flatJSON": false,
  "i.am.not.so.flat": true,
  "i.am.not.so.unflat": false,
  "i.am.a": "tree",
  "dates.0.day": 1,
  "dates.1.day": 8947
}
*/
console.log(flattenJson({
  "flatJSON": false,
  "i": {

    "mm": {
      "not": {
        "so": {
          "flat": true,
          "unflat": false
        }
      },
      "a": "tree"
    }
  },
  "dates": [{
    day: 1
  }, {
    day: 8947
  }]
}),"");

console.log(alphaFreq("aditya"));
console.log(doubleNos([1,2,3]));
console.log(evenNos([1,2,3,4,6,5,7]));


