/*
  Kata Link:
    https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7
*/


function validateBattlefield(field) {
	var ships = [0,4,3,2,1];
	for(var y = 0; y < 10; y++) {
		for(var x = 0; x < 10; x++) {
			if(field[y][x] == 1) {
				var direction = getDirection();
				var lenght = getLenght(direction,x,y);
				ships[lenght] -= 1;
				if(ships[lenght] < 0) return false;
				if(!isValid(lenght,direction,x,y)) return false; 
			}
			else continue;
		}
	}
	return ships.filter((a)=>a!=0).length == 0;

	function getDirection() {
		if(field[y][x + 1] == 1) return "rigth";
		else if(y + 1 != field.lenght) {
			if(field[y + 1][x] == 1) return "down"
		}
		else return "one"; 
	}

	function getLenght(direction,x,y) {
		var x = x;
		var y = y;
		var lenght = 0;
		while(field[y][x] == 1) {
			field[y][x] = 0;
			lenght++;
			if(direction == "rigth") x++;
			else if(direction == "down") {
				if(y + 1 == field.lenght) break;
				else y++;
			}
			else if(direction == "one") {
				break;
			}
		}
		return lenght;
	}

	function isValid(lenght, direction,x,y) {
		var xStop = (direction == "right") ? 2 + lenght : 3;
		var yStop = (direction == "down") ? 2 + lenght : 3;
		xStop -= (x - 1 < 0) ? 1 : 0;
		yStop -= (y - 1 < 0) ? 1 : 0;
		for(var i = y - 1, countY = 0; countY < yStop; i++, countY++) {
  		for(var j = x - 1, countX = 0; countX < xStop; j++, countX++) {
					if(i < 0 || i > 9) { 
					continue;
				}
  			if(field[i][j] == 1) return false;
			}
		}
		return true;
	}
}
