using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente conta = new ContaCorrente(867, 8761520);

            Console.WriteLine(conta.Agencia);
            Console.WriteLine(conta.Numero);

            Console.WriteLine(ContaCorrente.totalDeContasCriadas);

            Console.ReadLine();
        }
    }
}
