import React from "react";
import classNames from "classnames";
import "./Tipografia.css";

interface TipografiaProps extends React.HTMLProps<HTMLHeadingElement> {
  variante?: "h1" | "h2" | "h3" | "corpo" | "destaque";
  children: React.ReactNode;
  elemento: "h1" | "h2" | "h3" | "p";
  cor?: "verde" | "magenta" | "azul" | "grafite" | "cinza";
}

const mapaTipografia = {
  h1: "tipografia__titulo--1",
  h2: "tipografia__titulo--2",
  h3: "tipografia__titulo--3",
  corpo: "tipografia__paragrafo",
  destaque: "tipografia__destaque",
};

const mapaCores = {
  verde: "verde",
  magenta: "magenta",
  azul: "azul",
  grafite: "grafite",
  cinza: "cinza",
};

const Tipografia = ({
  variante = "corpo",
  elemento = "p",
  children,
  cor = "azul",
  ...rest
}: TipografiaProps) => {
  const Elemento = elemento;

  const classes = classNames({
    [mapaTipografia[variante]]: variante,
    [mapaCores[cor]]: cor,
  });

  return (
    <Elemento className={`tipografia ${classes}`} {...rest}>
      {children}
    </Elemento>
  );
};

export default Tipografia;
