import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetailPage from "./pages/ProductsDetailPage";
import { ArticlesProvider } from "./store/ArticlesContext";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {path: "/about", element: <AboutPage />},
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductsDetailPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <ArticlesProvider>
        <RouterProvider router={router} />
      </ArticlesProvider>
    </>
  );
}

export default App;
