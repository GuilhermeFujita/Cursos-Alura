using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _7_Condicionais
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Executando projeto 7");

            int idade = 16;
            int quantidadePessoas = 0;

            if(idade >= 18)
            {
                Console.WriteLine("Possui 18 anos ou mais, pode entrar.");
            }
            else if(quantidadePessoas >= 2)
            {
                Console.WriteLine("Não possui 18 anos, mas está acompanhado. Pode entrar");
            }
            else
            {
                Console.WriteLine("Não possui 18 anos, e não está acompanhado. Não pode entrar");
            }

            Console.ReadLine();
        }
    }
}
