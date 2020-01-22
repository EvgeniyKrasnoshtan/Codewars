/*
  Title:
    Break camelCase
  Description:
    Simple, given a string of words, return the length of the shortest word(s).
    String will never be empty and you do not need to account for different data types.
  */

function findShort(s){
  var arr = s.split(" ");
  var result = arr[0].length;
  for(var i = 0; i<arr.length; i++) {
      if(result > arr[i].length) result = arr[i].length;
  }
  return result;
}
