import Produtos from "./Produtos";
import Categorias from "./Categorias";
import Inscricao from "./Inscricao";
import SecaoHero from "./SecaoHero";
import categorias from "../../assets/categorias.json";
import produtos from "../../assets/produtos.json";
import Faq from "./Faq";

const Home = () => {
  return (
    <>
      <SecaoHero />
      <Categorias categorias={categorias} />
      <Produtos produtos={produtos} />
      <Inscricao />
      <Faq />
    </>
  );
};

export default Home;
