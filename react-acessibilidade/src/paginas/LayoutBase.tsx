import { Outlet } from "react-router-dom";
import Cabecalho from "../componentes/Cabecalho";
import Rodape from "../componentes/Rodape";

const LayoutBase = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <Outlet />
      </main>
      <Rodape />
    </>
  );
};

export default LayoutBase;
