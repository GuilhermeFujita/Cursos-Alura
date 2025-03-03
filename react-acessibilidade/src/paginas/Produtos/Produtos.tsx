import Botao from "@/componentes/Botao";
import Quantidade from "./Quantidade";
import Garantia from "./Garantia";
import Opcoes from "./Opcoes";
import Preco from "./Preco/Preco";
import ProdutoDescricao from "./Descricao";
import ProdutoHeader from "./ProdutoHeader/ProdutoHeader";
import ProdutoImagem from "./ProdutoImagem/ProdutoImagem";
import detalheProdutos from "@/assets/produtos.json";
import { IconeBotao } from "@/componentes/Icones";
import { useParams } from "react-router-dom";
import "./PaginaProduto.css";

const Produtos = () => {
  const params = useParams();

  const [produtoAtual] = detalheProdutos.filter(
    (produto) => produto.id == Number(params.produto)
  );

  return (
    <div className="pagina__produto">
      <section>
        <div className="pagina__produto--conteudo">
          <ProdutoImagem src={produtoAtual.src} alt={produtoAtual.altImg} />
          <div className="pagina__produto--informacoes">
            <ProdutoHeader nome={produtoAtual.nome} />
            <ProdutoDescricao descricao={produtoAtual.descricao} />
            <Preco preco={produtoAtual.valor} />
            <Opcoes />
            <Garantia />
            <Quantidade />
            <Botao variante="primario" icone={<IconeBotao />}>
              Adicionar ao carrinho
            </Botao>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produtos;
