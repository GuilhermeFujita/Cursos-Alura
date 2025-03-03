import React from "react";
import "./Link.css";
import classNames from "classnames";

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode;
  variante?: "padrao" | "primario" | "secundario";
}

const mapaEstilosLink = {
  padrao: "padrao",
  primario: "primario",
  secundario: "secundario",
};

const Link = ({ children, variante = "padrao", ...rest }: LinkProps) => {
  const classes = classNames(
    { [mapaEstilosLink[variante]]: variante },
    rest.className
  );
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
};

export default Link;
