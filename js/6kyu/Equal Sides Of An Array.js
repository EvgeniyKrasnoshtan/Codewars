/*
    Description:
    You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
  */

function findEvenIndex(arr)
{
  if(arr.length == 0) return 0;
  
  for(var i = 0; i < arr.length; i++) {
    var left = 0;
    var right = 0;
    
    for(var j = 0; j < arr.length; j++) {
      if(j < i) left += arr[j];
      else if(j > i) right +=arr[j];
    }
    
    if(left == right) return i;
  
  }
  return -1;
}
