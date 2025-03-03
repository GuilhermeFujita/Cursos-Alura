import Tipografia from "@/componentes/Tipografia";

type DescricaoProps = {
  descricao: string;
};

const ProdutoDescricao = ({ descricao }: DescricaoProps) => {
  return (
    <Tipografia elemento="p" variante="corpo" cor="azul">
      {descricao}
    </Tipografia>
  );
};

export default ProdutoDescricao;
