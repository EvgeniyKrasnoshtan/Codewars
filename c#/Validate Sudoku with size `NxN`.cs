/*
 Kata Link:
    https://www.codewars.com/kata/540afbe2dc9f615d5e000425
*/
using System;
using System.Collections.Generic;
class Sudoku
{
  int[][] s;

  public Sudoku(int [][] sudokuData)
        {
             s = sudokuData;
        }

  public bool IsValid()
        {int length = s.Length;


            foreach (int[] item in s)
            {
                if (item.Length != length)
                {
                    return false;
                }

                Dictionary<int, int> check = new Dictionary<int, int>();

                foreach (int num in item)
                {
                    
                    if (check.ContainsKey(num) || num > length || num <= 0)
                    {
                        return false;
                    }

                    check.Add(num , 1);
                }
                
            }

            for (int i = 0; i < length; i++)
            {
                Dictionary<int, int> check = new Dictionary<int, int>();

                for (int j = 0; j < length; j++)
                {
                    if (check.ContainsKey(s[j][i]) || s[j][i] > length || s[j][i] <= 0)
                    {
                        return false;
                    }

                    check.Add(s[j][i], 1);
                }
            }
if (length == 9)
            {

                int sum = 0;
                int square = (int)Math.Sqrt(length);
                for (int i = 0; i < square; i++)
                {
                    for (int j = 0; j < square; j++)
                    {
                        sum += s[i][j];
                    }
                }

                if (sum != 45)
                { return false;}
                
            }
            return true;
        }
}
