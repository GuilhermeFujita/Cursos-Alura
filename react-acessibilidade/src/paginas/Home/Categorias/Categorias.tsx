import Tipografia from "../../../componentes/Tipografia";
import "./Categorias.css";
import ListaCategorias from "./ListaCategorias";

export interface CategoriasProps {
  categorias: CategoriaProps[];
}

export interface CategoriaProps {
  id?: number;
  titulo: string;
  src: string;
  altImg: string;
}

const Categorias = ({ categorias }: CategoriasProps) => {
  return (
    <section className="secao__categorias">
      <Tipografia elemento="h2" variante="h2" cor="azul">
        Categorias
      </Tipografia>
      <Tipografia elemento="p" variante="corpo" cor="grafite">
        Escolha a categoria de produto que você deseja:
      </Tipografia>
      <ListaCategorias categorias={categorias} />
    </section>
  );
};

export default Categorias;
