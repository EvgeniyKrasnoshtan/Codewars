/*
   Kata Link:
    https://www.codewars.com/kata/513e08acc600c94f01000001
*/

function rgb(r, g, b){
  var args = [].slice.call(arguments);
  args = args.map((a)=>(a>255) ? 255 : (a <= 0) ? "00" : a);
  args = args.map((a)=>(a.toString(16).toUpperCase()));
  return args[0] + args[1] + args[2];    
}
