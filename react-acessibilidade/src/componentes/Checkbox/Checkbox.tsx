import React from 'react';
import './Checkbox.css';

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  legenda: string;
  id: string;
  nome: string;
  selecionado: boolean;
  aoSelecionar: () => void;
}

export const Checkbox = ({
  legenda,
  id,
  nome,
  selecionado,
  aoSelecionar,
  ...rest
}: CheckboxProps) => {
  return (
    <label htmlFor={id} className="checkbox_legenda">
      <input
        type="checkbox"
        name={nome}
        id={id}
        checked={selecionado}
        onChange={aoSelecionar}
        {...rest}
      />
      <span>{legenda}</span>
    </label>
  );
};
