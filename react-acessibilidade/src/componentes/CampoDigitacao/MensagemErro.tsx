interface MensagemErroProps extends React.HTMLProps<HTMLSpanElement> {
  mensagemErro: string;
}

const MensagemErro = ({ mensagemErro, ...rest }: MensagemErroProps) => {
  return (
    <span className="mensagem-erro" {...rest}>
      {mensagemErro}
    </span>
  );
};

export default MensagemErro;
