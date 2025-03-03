import Separador from "../Separador";
import Tipografia from "../Tipografia";

const RodapeLogo = () => {
  return (
    <div className="rodape__logo">
      <img
        src="/logo-rodape.svg"
        alt="Logo da Zoop Megastore nas cores magenta e branco"
      />
      <Separador />
      <Tipografia elemento="p" variante="corpo" cor="cinza">
        O jeito mais prático e rápido de realizar os seus desejos.
      </Tipografia>
    </div>
  );
};

export default RodapeLogo;
