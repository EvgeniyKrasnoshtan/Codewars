/*
 Kata Link:
    https://www.codewars.com/kata/52774a314c2333f0a7000688
*/

public class Parentheses
{
    public static bool ValidParentheses(string temp)
        {
            string input = "";
            foreach (char s in temp) if (s == '(' || s == ')') input += s;
            while (input != input.Replace("()", "")) input = input.Replace("()", "");
            return input.IndexOf(")") == -1 && input.IndexOf("(") == -1;
        }
}
