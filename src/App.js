import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetailPage from "./pages/ProductsDetailPage";
// import Headlines from "./pages/Headlines";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      // { path: "/headlines", element: <Headlines /> },
      { path: "/products/:productId", element: <ProductsDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
