import Link from "../../../componentes/Link";
import Tipografia from "../../../componentes/Tipografia";
import ListaProdutos from "./ListaProdutos";
import "./Produtos.css";

export interface ProdutosProps {
  produtos: ProdutoProps[];
}

export interface ProdutoProps {
  id?: number;
  nome: string;
  descricao: string;
  valor: number;
  src: string;
  altImg: string;
}

const Produtos = ({ produtos }: ProdutosProps) => {
  return (
    <section className="produtos__maisProcurados">
      <div className="produtos__maisProcurados--conteudo">
        <Tipografia elemento="h2" variante="h2" cor="azul">
          Mais procurados da semana
        </Tipografia>
        <ListaProdutos produtos={produtos} />
        <div className="produtos__maisProcurados--link">
          <Link variante="secundario" href="#" title="Ver mais">
            Ver mais
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
