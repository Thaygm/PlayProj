import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { GlobalCss } from "./styles";
import Header from "./components/Header";
import Banner from "./components/Banner";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Banner />,
  },
]);

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
