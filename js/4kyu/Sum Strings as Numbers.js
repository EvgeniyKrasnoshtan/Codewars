/*
 Kata Link:
    https://www.codewars.com/kata/5324945e2ece5e1f32000370
*/

function sumStrings(a,b) {
  var res = "";
  var overflow = sum = 0;
  for(var i = a.length - 1, j = b.length - 1; Math.max(i,j) >= 0 ; i--, j--) {
    sum = ( parseInt(a[i]) || 0 ) + ( parseInt(b[j]) || 0 ) + overflow;
    overflow = (sum >= 10) ? (sum - sum % 10)/10 : 0;
    res += (sum >= 10) ? sum % 10 : sum;
  }  
    if(overflow != 0) res += overflow;
    res = res.split("").reverse().join("");
    for(var i = 0; i == 0;) { (res[0] == 0) ? res = res.replace("0", "") : i++; }
    return res;
  
}
