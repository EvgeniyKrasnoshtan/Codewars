/*
 Kata Link:
    https://www.codewars.com/kata/break-camelcase
*/

function josephusSurvivor(n,k){
  var permuted = [];
  for(var j = 1; j <= n; j++) permuted.push(j);
  for(var i = 0, count = 1; permuted.length > 1; i++,count++) {
    if(i == permuted.length) i = 0;
    if(k == count) {
      permuted.splice(i,1);
      count = 0;
      i--;
    }
    
  }
  return permuted[0];
}
