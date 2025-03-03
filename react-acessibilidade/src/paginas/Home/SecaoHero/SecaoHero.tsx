import "./SecaoHero.css";
import Botao from "../../../componentes/Botao";
import SecaoHeroImagem from "./SecaoHeroImagem";
import SecaoHeroTitulo from "./SecaoHeroTitulo";
import SecaoHeroDescricao from "./SecaoHeroDescricao";

const SecaoHero = () => {

  return (
    <section className="secao__hero">
      <div className="secao__hero--conteudo">
        <SecaoHeroImagem />
        <div className="secao__hero--informacoes">
          <SecaoHeroTitulo />
          <SecaoHeroDescricao />
          <Botao variante="primario">
            Quero ver!
          </Botao>
        </div>
      </div>
    </section>
  );
};

export default SecaoHero;
