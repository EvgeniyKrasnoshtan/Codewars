/*
 Kata Link:
    https://www.codewars.com/kata/57680d0128ed87c94f000bfd
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


public class Boggle
        {
            bool founded = false;
            string word;
            public Boggle(char[][] board, string word)
            {
                this.word = word;
                for (int y = 0; y < board.Length; y++)
                {
                    for (int x = 0; x < board[y].Length; x++)
                    {
                        if (board[y][x] == word[0])
                        {
                            CheckCell(y,x, 1, board);
                        }
                    }
                }

            }


            public void CheckCell(int y, int x, int wordIndex, char[][] boardTemp ) //board ?
            {
               
                int i = wordIndex;
                

                if (i == word.Length)
                {
                    founded = true;
                    return;
                }
                if (y != 0 && boardTemp[y - 1][x] == word[i])
                {
                    boardTemp[y][x] = ' ';
                    CheckCell(y - 1, x, i + 1, boardTemp);
                }
                //down
                if (y != boardTemp.Length - 1 && boardTemp[y + 1][x] == word[i])
                {
                    boardTemp[y][x] = ' ';
                    CheckCell(y + 1, x, i + 1, boardTemp);
                }
                //left
                if (x != 0 && boardTemp[y][x - 1] == word[i])
                {
                    boardTemp[y][x] = ' ';
                    CheckCell(y, x - 1, i + 1, boardTemp);
                }
                //right
                if (x != boardTemp[y].Length - 1 && boardTemp[y][x + 1] == word[i])
                {
                    boardTemp[y][x] = ' ';
                    CheckCell(y, x + 1, i + 1, boardTemp);
                }
                //up-left
                if (x != 0 && y != 0 && boardTemp[y - 1][x - 1] == word[i])
                {
                    boardTemp[y][x] = ' ';
                    CheckCell(y - 1, x - 1, i + 1, boardTemp);
                }
                //up-right
                if (x != boardTemp[y].Length - 1 && y != 0 && boardTemp[y - 1][x + 1] == word[i])
                {
                    boardTemp[y][x] = ' ';
                    CheckCell(y - 1, x + 1, i + 1, boardTemp);
                }
                //down-left
                if (y != boardTemp.Length - 1 && x != 0 && boardTemp[y + 1][x - 1] == word[i])
                {
                    boardTemp[y][x] = ' ';
                    CheckCell(y + 1, x - 1, i + 1, boardTemp);
                }
                //down-right
                if (y != boardTemp.Length - 1 && x != boardTemp[y].Length - 1 && boardTemp[y + 1][x + 1] == word[i])
                {
                    boardTemp[y][x] = ' ';
                    CheckCell(y + 1, x + 1, i + 1, boardTemp);
                }
                return;

            }
            public bool Check()
            {
               
                return founded;

            }
