type ProdutoImagemProps = {
  src: string;
  alt: string;
};

const ProdutoImagem = ({ src, alt }: ProdutoImagemProps) => {
  return (
    <img
      className="pagina__produto--imagem"
      src={"/imagens/produtos/detalhe-produtos/" + src}
      alt={alt}
    />
  );
};

export default ProdutoImagem;
