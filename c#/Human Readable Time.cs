/*
 Kata Link:
    https://www.codewars.com/kata/52685f7382004e774f0001f7
*/

public static class TimeFormat
{
    public static string GetReadableTime(int seconds)
    {
     string time = "";
            for (int i = 3, divide = 60 * 60; i > 0; i--, divide /= 60) {
                int part = seconds / divide;
                time += (part > 10) ? part.ToString() : "0" + part.ToString();
                time += (i != 1) ? ":" : "";
                seconds -= part* divide; 
            }
            return time;  
    }
}
