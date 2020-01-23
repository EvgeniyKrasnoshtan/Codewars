/*
Kata Link:
    https://www.codewars.com/kata/546d15cebed2e10334000ed9

*/

function solveExpression(pureExp) {
  
  var changedExp = "";
  
  var equally = pureExp.search(/=/);
  
  for(var i = 0; i < 10; i++) {
    
    if(pureExp.indexOf(i) != -1) continue;
    if(pureExp.search(/\?{2,}/) != -1 && i == 0) continue; 
      
    changedExp = pureExp.replace(/\?/gi, i);
      
	  var operator = changedExp.search(/\d[-+*]/) + 1;
    var firstPart = +changedExp.substring(0, operator); 
  	var secondPart = +changedExp.substring(operator + 1, equally);
    var result = +changedExp.substring(equally + 1);
	  
      switch(changedExp[operator]) {
        case "+" :
          if(firstPart + secondPart == result) return i;
          break;
        case "*" :
          if(firstPart * secondPart == result) return i;
          break;
        case "-" :
          if(firstPart - secondPart == result) return i;
          break;
      }
  }
  return -1;
}
