using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08_CalculaPoupanca
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto 8");

            double valorInvestido = 1000;
            int contadorMes = 1;

            while(contadorMes <= 12)
            {
                //0.36% = 0.0036
                valorInvestido = valorInvestido + valorInvestido * 0.0036;
                Console.WriteLine("Após {0} mes(es) você terá R$ {1}", contadorMes, valorInvestido);
                contadorMes++;
            }

            Console.ReadLine();
        }
    }
}
