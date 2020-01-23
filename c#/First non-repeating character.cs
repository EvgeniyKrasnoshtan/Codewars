/*
 Kata Link:
    https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
*/
public class Kata
{
  public static string FirstNonRepeatingLetter(string str)
        {
            string result = "";
            
            for (int i = 0; i < str.Length; ++i)
            {
                string temp = str[i].ToString().ToLower();
                if (str.ToLower().LastIndexOf(temp) == str.ToLower().IndexOf(temp))
                {
                    result += str[i];
                    break;
                }

            }

            return result;
        }
}
