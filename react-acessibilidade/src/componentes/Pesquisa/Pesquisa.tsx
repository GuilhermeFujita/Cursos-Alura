import { useId } from "react";
import Botao from "../Botao";
import CampoDigitacao from "../CampoDigitacao";
import { IconeBusca } from "../Icones";
import "./Pesquisa.css";

const Pesquisa = () => {
  const idPesquisa = useId();
  return (
    <div className="campo__pesquisa" aria-label="Campo de Busca">
      <CampoDigitacao
        id={idPesquisa}
        placeholder="Digite aqui o produto que você busca"
        type="text"
        name="Campo entrada"
        aria-label="Campo de pesquisa"
      />
      <Botao aria-label="Ícone de Lupa" type="button" icone={<IconeBusca />} />
    </div>
  );
};

export default Pesquisa;
