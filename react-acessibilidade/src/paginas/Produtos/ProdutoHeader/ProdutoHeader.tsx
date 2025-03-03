import Tipografia from "@/componentes/Tipografia";
import IconesLinks from "../IconesLinks";

type ProdutoHeaderProps = {
  nome: string;
};

const ProdutoHeader = ({ nome }: ProdutoHeaderProps) => {
  return (
    <div className="pagina__produto--cabecalho">
      <Tipografia elemento="h1" variante="h1" cor="azul">
        {nome}
      </Tipografia>
      <IconesLinks />
    </div>
  );
};

export default ProdutoHeader;
