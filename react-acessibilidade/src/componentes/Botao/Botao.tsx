import React from "react";
import "./Botao.css";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variante?: "padrao" | "primario" | "secundario";
  icone?: React.ReactNode;
}

const mapaEstilosBotao = {
  padrao: "botao__padrao",
  primario: "botao__primario",
  secundario: "botao__secundario",
};

const Botao = ({
  children,
  variante = "padrao",
  icone,
  ...rest
}: ButtonProps) => {
  const classes = classNames({ [mapaEstilosBotao[variante]]: variante });

  return (
    <button className={`botao ${classes}`} {...rest}>
      {icone && <i>{icone}</i>}
      {children}
    </button>
  );
};

export default Botao;
