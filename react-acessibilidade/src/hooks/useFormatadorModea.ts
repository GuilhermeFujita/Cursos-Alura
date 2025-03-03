import { useCallback } from "react";

const useFormatadorMoeda = (locale = "pt-BR", currency = "BRL") => {
  const moedaFormatada = useCallback(
    (amount: number) => {
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
      }).format(amount);
    },
    [locale, currency]
  );

  return moedaFormatada;
};

export default useFormatadorMoeda;
