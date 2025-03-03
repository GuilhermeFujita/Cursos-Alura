import ProdutoCartao from "./ProdutoCartao";
import { ProdutosProps } from "./Produtos";

const ListaProdutos = ({ produtos }: ProdutosProps) => {
  return (
    <ul className="produtos__maisProcurados--lista">
      {produtos.map((produto) => (
        <ProdutoCartao
          key={produto.id}
          id={produto.id}
          src={`/imagens/produtos/${produto.src}`}
          altImg={produto.altImg}
          nome={produto.nome}
          descricao={produto.descricao}
          valor={produto.valor}
        />
      ))}
    </ul>
  );
};

export default ListaProdutos;
