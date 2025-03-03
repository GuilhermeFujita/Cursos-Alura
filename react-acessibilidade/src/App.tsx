import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutBase from "./paginas/LayoutBase";
import Home from "./paginas/Home";
import Produtos from "./paginas/Produtos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produtos/:produto",
        element: <Produtos />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
