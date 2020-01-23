/*
 Kata Link:
    https://www.codewars.com/kata/520b9d2ad5c005041100000f
*/

using System;

public class Kata
{
  public static string PigIt(string str)
        {
            string result = "";
            string punc = "!.,?";
            string[] wordsArray = str.Split(' ');
            foreach (string word in wordsArray) {
                if (punc.IndexOf(word) == -1) {
                    result +=  word.Substring(1, word.Length - 1) + word[0] + "ay";
                    if (wordsArray[wordsArray.Length - 1] != word) result += " ";
                }
            }
            return result;
        }
}
