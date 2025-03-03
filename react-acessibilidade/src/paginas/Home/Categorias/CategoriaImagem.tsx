interface ImagemProps {
  src: string;
  alt: string;
}

const CategoriaImagem = ({ src, alt }: ImagemProps) => {
  return <img className="secao__categoria--imagem" src={src} alt={alt} />;
};

export default CategoriaImagem;
