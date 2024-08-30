import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductCards from "./components/ProductCards";
import Categories from "./components/Categories";
import Error from "./components/PageNotFound";
import "typeface-inter";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Categories />,
        },
        {
          path: "/category/:category",
          element: <ProductCards />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
