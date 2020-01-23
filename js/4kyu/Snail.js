/*
Kata Link:
    https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

*/

snail = function(array) {
  var result = [];
  var x = 1;
  var y = 0;
  var direction = "right";
  if(array[0].length == 0) return [];
  for(var row = col = 0; result.length < Math.pow(array[0].length,2); row += x, col += y) {
    
    result.push(array[col][row]);
    delete array[col][row];  
    if(array[col + y] == undefined || array[col+y][row+x] == undefined) {
        switch(direction) {
          case "right":
            direction = "down";
            x = 0;
            y = 1;
            break;
          case "down": 
            direction = "left";
            x = -1;
            y = 0;
            break;
          case "left": 
            direction = "up";
            x = 0;
            y = -1;
            break;
          case "up": 
            direction = "right";
            x = 1;
            y = 0;
            break;
        }  
      
  }
}
return result;
}
