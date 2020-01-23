/*
 Kata Link:
    https://www.codewars.com/kata/51e056fe544cf36c410000fb
*/
using System;
using System.Collections.Generic;
using System.Linq;
public class TopWords
{
        static int ComparisonTwoTuples(Tuple<string, int> a, Tuple<string, int> b)
        {
            
            var part1 = a.Item2;
            var part2 = b.Item2;
            var compareResult = part1.CompareTo(part2);
           
            if (compareResult == 0)
            {
                return -b.Item2.CompareTo(a.Item2);
            }
         
            return -compareResult;
        }
        
    public static List<string> Top3(string s)
    {
         char[] split = new char[] { '-', '_', ' ', ',', '.', ':', ';','\t', '!', '?', '/' };
            List<string> pool = s.ToLower().Split(split).ToList();
            List<Tuple<string, int>> temp = new List<Tuple<string, int>>();

            for (int i = 0; i < pool.Count; i++)
            {
                pool[i] = pool[i].Trim(new char[] { '/', ' ', ',', '.', ':', '\t' });
            }
            
            while (pool.Count != 0)
            {
                string word = pool.First();
                
                int count = 0;
                

                while (pool.Remove(word)) count++;
                
                if (word.Trim(new char[] { '\'', '/', ' ', ',', '.', ':', '\t' }) == "") continue;
                temp.Add(new Tuple<string, int>(word, count));
            }
            temp.Sort(ComparisonTwoTuples);

            int count1 = 0;
            List<string> result = new List<string>();

            foreach (Tuple<string, int> ss in temp)
            {
                if (count1 < 3) result.Add(temp[count1].Item1);
                count1++;

            }
            return result;
            
    }
}
