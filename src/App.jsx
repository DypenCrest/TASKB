import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detailpage from "./pages/Detailpage";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import Layoutpage from "./Layout/Layoutpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layoutpage />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        { path: "products/:productId", element: <Detailpage /> },
        { path: "cart", element: <Cartpage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
