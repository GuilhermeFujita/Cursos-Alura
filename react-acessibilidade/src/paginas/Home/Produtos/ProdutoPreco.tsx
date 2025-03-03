import Tipografia from "../../../componentes/Tipografia";
import useFormatadorMoeda from "../../../hooks/useFormatadorModea";

interface ProdutoPrecoProps {
  preco: number;
}

const ProdutoPreco = ({ preco }: ProdutoPrecoProps) => {
  const formatadorMoeda = useFormatadorMoeda();
  return (
    <Tipografia
      elemento="h3"
      variante="corpo"
      cor="azul"
      style={{ fontWeight: "800" }}
    >
      {formatadorMoeda(preco)}
    </Tipografia>
  );
};

export default ProdutoPreco;
