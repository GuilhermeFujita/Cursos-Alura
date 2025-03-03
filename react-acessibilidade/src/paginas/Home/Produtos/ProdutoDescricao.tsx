import Tipografia from "../../../componentes/Tipografia";

type ProdutoDescricaoProps = {
  texto: string;
};

const ProdutoDescricao = ({ texto }: ProdutoDescricaoProps) => {
  return (
    <Tipografia
      elemento="p"
      variante="corpo"
      cor="azul"
      style={{ fontSize: "1rem" }}
    >
      {texto}
    </Tipografia>
  );
};

export default ProdutoDescricao;
