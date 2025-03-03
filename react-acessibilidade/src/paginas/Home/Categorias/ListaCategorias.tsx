import CategoriaItem from "./CategoriaItem";
import { CategoriasProps } from "./Categorias";

const ListaCategorias = ({ categorias }: CategoriasProps) => {
  return (
    <ul tabIndex={0} className="secao__categoria">
      {categorias.map((categoria) => (
        <CategoriaItem
          key={categoria.id}
          titulo={categoria.titulo}
          src={categoria.src}
          altImg={categoria.altImg}
        />
      ))}
    </ul>
  );
};

export default ListaCategorias;
