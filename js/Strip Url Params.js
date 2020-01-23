/*
Kata Link:
    https://www.codewars.com/kata/51646de80fd67f442c000013

*/


function stripUrlParams(url, paramsToStrip){
  if(url.indexOf("?") == -1) return url;
  var params = url.replace(/.+\?/, "").split(/&/);// complete me
  var newUrl = url.replace(/\?.+/, "");
  paramsToStrip = (paramsToStrip) ? paramsToStrip : [];
  
  var params2 = "";
  for(var i = 0; i < params.length; i++) {
    if(params2.indexOf(params[i].slice(0,2)) == -1 && paramsToStrip.indexOf(params[i][0]) == -1){
      params2 += (i == 0) ? "" : "&";
	  params2 += params[i]; 
    }
  
  }
  return newUrl + "?" + params2;
}
