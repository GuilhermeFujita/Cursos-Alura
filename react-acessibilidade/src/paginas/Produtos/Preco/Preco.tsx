import Tipografia from "@/componentes/Tipografia";
import useFormatadorMoeda from "@/hooks/useFormatadorModea";

type PrecoProps = {
  preco: number;
};

const Preco = ({ preco }: PrecoProps) => {
  const formatadorMoeda = useFormatadorMoeda();
  return (
    <Tipografia elemento="p" variante="h3" cor="azul">
      {formatadorMoeda(preco)}
    </Tipografia>
  );
};

export default Preco;
