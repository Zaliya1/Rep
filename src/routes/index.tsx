import { useRoutes } from 'react-router-dom';
import PageNotFound from "../pages/PageNotFound";
import Games from "../pages/games/Games";
import Game from "../pages/game/Game";

const Router = () => {
  const routes = useRoutes([
    { path: '', element: <Games /> },
    { path: '/:id', element: <Game /> },
    { path: '*', element: <PageNotFound /> },
  ])

  return routes
}

export default Router
