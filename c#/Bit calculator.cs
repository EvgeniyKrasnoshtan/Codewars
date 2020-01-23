/*
 Kata Link:
    https://www.codewars.com/kata/52ece9de44751a64dc0001d9
*/
public class Kata
{
  public static int Calculate(string a, string b)
        {
            if (a.Length > b.Length)
            {
                b = b.Insert(0, new string('0', a.Length - b.Length));
                //b = b.PadLeft(a.Length - b.Length, '0');
            }
            else
            {
                a = a.Insert(0, new string('0', b.Length - a.Length));
            }
            int temp = 0;
            int sum = 0;
            int pow = 1;

            for (int i = a.Length - 1; i >= 0; i--)
            {

                int s = ((a[i] == '1') ? 1 : 0) + ((b[i] == '1') ? 1 : 0) + temp;

                if (s == 3)
                {
                    sum += pow;
                    temp = 1;
                }
                else if (s == 2)
                {
                    temp = 1;
                }
                else if (s == 1)
                {
                    sum += pow;
                    temp = 0;
                }
                else
                {
                    temp = 0;
                }
                pow *= 2;
            }
            if (temp != 0)
            {
                sum += pow;
            }
            return sum;
        }

}
