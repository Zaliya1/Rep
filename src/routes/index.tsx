import { useRoutes } from 'react-router-dom';
import News from "../pages/News";
import PageNotFound from "../pages/PageNotFound";

const Router = () => {
  const routes = useRoutes([
    { path: '', element: <News /> },
    { path: '/new', element: <PageNotFound /> },
  ])

  return routes
}

export default Router
