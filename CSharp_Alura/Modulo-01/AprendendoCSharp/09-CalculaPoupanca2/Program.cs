using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09_CalculaPoupanca2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto 9");

            double valorInvestido = 1000;
            
            for(int contadorMes = 1; contadorMes <=12; contadorMes++)
            {
                valorInvestido *= 1.0036;
                Console.WriteLine("Após {0} mes(es) você terá R$ {1}", contadorMes, valorInvestido);
            }

            Console.ReadLine();
        }
    }
}
