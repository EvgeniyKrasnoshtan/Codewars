/*
 Kata Link:
    https://www.codewars.com/kata/52e88b39ffb6ac53a400022e
*/

using System;

public class Kata

{
  public static string UInt32ToIP(uint ip)
  {
    string binary = Convert.ToString(ip, 2);
            binary = new string('0', 32 - binary.Length) + binary;
            binary = Convert.ToInt32(binary.Substring(0,8),2) + "." + Convert.ToInt32(binary.Substring(8, 8),2) + "." + Convert.ToInt32(binary.Substring(16, 8),2) + "." + Convert.ToInt32(binary.Substring(24, 8),2);
            return binary;
  }
}
