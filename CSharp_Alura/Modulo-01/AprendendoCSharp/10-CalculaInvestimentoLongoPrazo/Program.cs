using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10_CalculaInvestimentoLongoPrazo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando Projeto 10");

            double valorInvestido = 1000;
            double fatorInvestimento = 1.0036;

            for (int contadorAno = 1; contadorAno <= 5; contadorAno++)
            {
                for (int contadorMes = 1; contadorMes <= 12; contadorMes++)
                {
                    valorInvestido *= fatorInvestimento;
                }

                fatorInvestimento += 0.0010;
            }

            Console.WriteLine("Valor total do investimento: R$ {0}", valorInvestido);
            Console.ReadLine();
        }
    }
}
