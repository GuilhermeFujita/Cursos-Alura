import Link from "../Link";
import Tipografia from "../Tipografia";

const rodapeLinks = ["Nossa história", "Carreiras", "Nossa Loja"];

const RodapeInstitucional = () => {
  return (
    <div className="rodape__institucional">
      <Tipografia
        style={{ fontWeight: "700" }}
        elemento="h3"
        variante="corpo"
        cor="verde"
      >
        Institucional
      </Tipografia>
      <ul tabIndex={0} className="rodape__institucional--links">
        {rodapeLinks.map((link) => (
          <li key={link}>
            <Link href="#">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RodapeInstitucional;
