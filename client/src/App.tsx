import { useRoutes } from "react-router";
import routes from "./app/routes/routes";
import Providers from "./app/providers";

function App() {
  const routing = useRoutes(routes);

  return (
    <Providers>
      {routing}
    </Providers>
  );

}

export default App;
