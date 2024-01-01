import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages";
import ContactsPage from "./pages/contacts";
import ErrorPage from "./pages/errors/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts",
    element: <ContactsPage />,
  },
]);

export { router };
