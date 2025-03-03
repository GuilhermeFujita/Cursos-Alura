import "./Rodape.css";
import RodapeAtendimento from "./RodapeAtendimento";
import RodapeCopyright from "./RodapeCopyright";
import RodapeInstitucional from "./RodapeInstitucional";
import RodapeLogo from "./RodapeLogo";
import RodapeRedesSociais from "./RodapeRedesSociais";

const Rodape = () => {
  return (
    <footer className="rodape__conteudo">
      <div className="rodape__informacoes">
        <RodapeLogo />
        <RodapeInstitucional />
        <RodapeAtendimento />
        <RodapeRedesSociais />
      </div>
      <RodapeCopyright />
    </footer>
  );
};

export default Rodape;
