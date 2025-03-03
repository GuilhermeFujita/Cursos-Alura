import { Link } from "react-router-dom";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoImagem from "./ProdutoImagem";
import ProdutoPreco from "./ProdutoPreco";
import ProdutoTitulo from "./ProdutoTitulo";
import { ProdutoProps } from "./Produtos";

const ProdutoCartao = ({
  src,
  altImg,
  id,
  nome,
  descricao,
  valor,
}: ProdutoProps) => {
  return (
    <li>
      <Link to={`produtos/${id}`} className="produtos__maisProcurados--cartao">
        <ProdutoImagem src={src} altImg={altImg} />
        <div className="produtos__maisProcurados--informacoes">
          <ProdutoTitulo titulo={nome} />
          <ProdutoDescricao texto={descricao} />
          <ProdutoPreco preco={valor} />
        </div>
      </Link>
    </li>
  );
};

export default ProdutoCartao;
