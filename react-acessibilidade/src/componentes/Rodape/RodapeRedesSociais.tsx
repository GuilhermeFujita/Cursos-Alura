import { IconeInstagram, IconeTiktok, IconeWhatsapp } from "../Icones";
import Link from "../Link";
import Tipografia from "../Tipografia";

const iconesRedesSociais = [
  {
    link: "whatsapp",
    componente: <IconeWhatsapp />,
    alt: "Ícone da rede social Whatsapp",
  },
  {
    link: "instagram",
    componente: <IconeInstagram />,
    alt: "Ícone da rede social Instagram",
  },
  {
    link: "tiktok",
    componente: <IconeTiktok />,
    alt: "Ícone da rede social Tik Tok",
  },
];

const RodapeRedesSociais = () => {
  return (
    <div className="rodape__redes-sociais">
      <Tipografia
        style={{ fontWeight: "700" }}
        elemento="h3"
        variante="corpo"
        cor="verde"
      >
        Redes sociais
      </Tipografia>
      <Tipografia elemento="p" variante="corpo" cor="cinza">
        Acesse nossas redes:
      </Tipografia>
      <ul tabIndex={0} className="rodape__redes-sociais--icones">
        {iconesRedesSociais.map((icone) => (
          <li key={icone.alt}>
            <Link
              href={"#" + icone.link}
              alt={icone.alt}
              aria-label={icone.alt}
            >
              {icone.componente}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RodapeRedesSociais;
