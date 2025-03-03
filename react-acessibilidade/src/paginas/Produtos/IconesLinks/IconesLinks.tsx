import Link from "@/componentes/Link";
import { IconeCompartilhar, IconeFavoritar } from "@/componentes/Icones";

const IconesLinks = () => {
  return (
    <div className="pagina__produto--icones">
      <Link href="#">
        <IconeCompartilhar />
      </Link>
      <Link href="#">
        <IconeFavoritar />
      </Link>
    </div>
  );
};

export default IconesLinks;
