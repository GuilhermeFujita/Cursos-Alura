import Link from "../Link";
import Tipografia from "../Tipografia";

const RodapeAtendimento = () => {
  return (
    <div className="rodape__atendimento">
      <Tipografia
        style={{ fontWeight: "700" }}
        elemento="h3"
        variante="corpo"
        cor="verde"
      >
        Central de atendimento
      </Tipografia>
      <Link href="#">SAC 4003 4848</Link>
    </div>
  );
};

export default RodapeAtendimento;
