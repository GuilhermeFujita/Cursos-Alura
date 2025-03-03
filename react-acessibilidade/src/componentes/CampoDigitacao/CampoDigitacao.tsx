import React from "react";
import "./CampoDigitacao.css";
import MensagemErro from "./MensagemErro";

interface CampoDigitacaoProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  legenda?: string;
  icone?: React.ReactNode;
  id?: string;
  erro?: string;
}

const CampoDigitacao = ({
  legenda,
  id,
  erro,
  ...rest
}: CampoDigitacaoProps) => {
  return (
    <label htmlFor={id} className="campo__texto--legenda">
      {legenda}
      <input className="campo__texto" id={id} {...rest} />
      {erro && <MensagemErro mensagemErro={erro} />}
    </label>
  );
};

export default CampoDigitacao;