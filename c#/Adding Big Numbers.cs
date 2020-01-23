/*
 Kata Link:
    https://www.codewars.com/kata/525f4206b73515bffb000b21
*/

using System;

public class Kata
{
  public static string Add(string a, string b) {
            
            if (a.Length > b.Length) b = b.Insert(0, new string('0', a.Length - b.Length));
            else if (b.Length > a.Length) a = a.Insert(0, new string('0', b.Length - a.Length));
            
            string result = "";
            int temp = 0;
         
            for (int i = 0; i < a.Length; i++)
            {
                temp = Convert.ToInt32(a.Substring(a.Length - i - 1,1)) + Convert.ToInt32(b.Substring(b.Length - i - 1, 1)) + temp;
                result = result.Insert(0, (temp % 10).ToString());
                temp = temp / 10;
            }
            if(temp != 0)
            result = result.Insert(0, temp.ToString());

                return result;
            
        } 
}
