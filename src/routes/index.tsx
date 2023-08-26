import { useRoutes } from 'react-router-dom';
import News from "../pages/News";
import PageNotFound from "../pages/PageNotFound";
import Games from "../pages/games/Games";

const Router = () => {
  const routes = useRoutes([
    { path: '', element: <Games /> },
    { path: '/id', element: <News /> },
    { path: '*', element: <PageNotFound /> },
  ])

  return routes
}

export default Router
