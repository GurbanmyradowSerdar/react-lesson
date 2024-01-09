import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/root";
import ContactsPage from "./pages/contacts";
import ErrorPage from "./pages/errors/ErrorPage";
import CatalogPage from "./pages/catalog";
import FormPage from "./pages/form";
import HomePage from "./pages";
import { getContactById } from "./loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "form",
        element: <FormPage />,
      },
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/contacts/:id",
        element: <ContactsPage />,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
    ],
  },
  // },
  // {
  //   path: "/contacts/:id",
  //   element: <ContactsPage />,
  // },
  // {
  //   path: "/catalog",
  //   element: <CatalogPage />,
  // },
]);

export { router };
