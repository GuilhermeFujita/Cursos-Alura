import { ChangeEvent, InputHTMLAttributes } from 'react';
import './BotaoRadio.css';

interface BotaoRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  nome: string;
  valor: string;
  selecionado: boolean;
  aoMudar: (evento: ChangeEvent<HTMLInputElement>) => void;
  textoLegenda: string;
}

export const BotaoRadio = ({
  id,
  nome,
  valor,
  selecionado,
  aoMudar,
  textoLegenda,
}: BotaoRadioProps) => {
  return (
    <li>
      <label htmlFor={id} className="botao__radio--legenda">
        <input
          type="radio"
          name={nome}
          id={id}
          value={valor}
          checked={selecionado}
          onChange={aoMudar}
        />
        <span>{textoLegenda}</span>
      </label>
    </li>
  );
};
