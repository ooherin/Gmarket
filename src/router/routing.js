import { createBrowserRouter } from "react-router-dom";

import LoginPage from "pages/login";
import MainPage from "pages/main";
import Layout from "components/Layout";
import DetailPage from "pages/detail";
import CartPage from "pages/cart/cart";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <MainPage />,
        path: "/",
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
