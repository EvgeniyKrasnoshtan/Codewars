/*
Kata Link:
    https://www.codewars.com/kata/563fbac924106b8bf7000046
*/


function generateBC(url, separator) {

  reject = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];

  url = url.split(/\/+/).filter((a)=>!/http|index\..+?$/gim.test(a)).filter((a)=>a!="");
  url.shift();
  var result = "";
 
  for(var i = 0; i < url.length; i++) {
  
  	result += (i == url.length - 1) ? '<span class="active">' : '<a href="/' + url.slice(0, i + 1).join("/") + '/">'; 
  	
    url[i] = url[i].replace(/\..+|#.+|\?.+/, "");

  	if(url[i].length > 30) {
  		result += url[i].split("-")
  						.filter((a)=>!~reject.indexOf(a))
  						.map((a)=>a[0].toUpperCase())
  						.join("");
  	}
  	else { 
  		result += url[i].toUpperCase()
  						.replace(/-/gim, " ");
  	}

  	result += (i == url.length - 1) ? '</span>' : '</a>' + separator; 

  }
  var res = "";
  res	 += (result == "") ? '<span class="active">HOME</span>' : '<a href="/">HOME</a>' + separator + result;

  return res;
}




