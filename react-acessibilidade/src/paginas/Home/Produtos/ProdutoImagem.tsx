interface ProdutoImagemProps {
  src: string;
  altImg: string;
}

const ProdutoImagem = ({ src, altImg }: ProdutoImagemProps) => {
  return (
    <img className="produtos__maisProcurados--imagem" src={src} alt={altImg} />
  );
};

export default ProdutoImagem;
