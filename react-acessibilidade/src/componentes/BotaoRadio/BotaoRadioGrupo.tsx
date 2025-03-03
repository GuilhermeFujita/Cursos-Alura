import { ReactNode } from 'react';

interface BotaoRadioGrupoProps {
  children: ReactNode;
  legenda?: string;
  ariaLabel: string;
}

export const BotaoRadioGrupo = ({
  children,
  legenda,
  ariaLabel,
}: BotaoRadioGrupoProps) => {
  return (
    <fieldset
      className="radio__grupo--campos"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {legenda && <legend className="radio__grupo--legenda">{legenda}</legend>}
      <ul className="radio__grupo--campos">{children}</ul>
    </fieldset>
  );
};
