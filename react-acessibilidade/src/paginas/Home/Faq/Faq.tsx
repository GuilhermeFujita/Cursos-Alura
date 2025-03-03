import "./Faq.css";
import Tipografia from "@/componentes/Tipografia";

const Faq = () => {

  return (
    <section className="secao__duvidas">
      <Tipografia elemento="h2" variante="h2" cor="azul">
        Dúvidas frequentes
      </Tipografia>
      <Tipografia elemento="p" variante="corpo" cor="grafite">
        Antes de entrar em contato, verifique se sua dúvida está respondida em
        nossa FAQ!
      </Tipografia>
    </section>
  );
};

export default Faq;
