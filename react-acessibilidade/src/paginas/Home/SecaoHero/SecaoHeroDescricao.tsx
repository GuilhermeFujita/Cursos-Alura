import Tipografia from "../../../componentes/Tipografia";

const SecaoHeroDescricao = () => {
  return (
    <Tipografia
      elemento="p"
      variante="corpo"
      cor="cinza"
      style={{ width: "680px" }}
    >
      Encontre tudo que você precisa em um só lugar com 15% de desconto na
      primeira compra!
    </Tipografia>
  );
};

export default SecaoHeroDescricao;
