using System; 

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      string name = "Antti";
     int score =1000;
     
        string print = name +"  has scored before level: " + score;        
        Console.WriteLine(print);
        
        score =score+ 50;
        string printAfter = name +"  has scored after level: " + score;        
        Console.WriteLine(printAfter );
    }
  }
}