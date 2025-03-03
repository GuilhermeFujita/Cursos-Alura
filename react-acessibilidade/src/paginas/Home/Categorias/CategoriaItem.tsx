import Link from "../../../componentes/Link";
import Tipografia from "../../../componentes/Tipografia";
import CategoriaImagem from "./CategoriaImagem";
import { CategoriaProps } from "./Categorias";

const CategoriaItem = ({ src, altImg, titulo }: CategoriaProps) => {
  return (
    <li>
      <Link href="#" className="secao__categoria--cartao">
        <CategoriaImagem src={`/imagens/categorias/${src}`} alt={altImg} />
        <div className="secao__categorias--titulo">
          <Tipografia
            elemento="h2"
            variante="corpo"
            cor="azul"
            style={{ fontWeight: "700" }}
          >
            {titulo}
          </Tipografia>
        </div>
      </Link>
    </li>
  );
};

export default CategoriaItem;
