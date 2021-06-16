import Details from '../views/pages/details';
import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';

const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Details,
};

export default routes;
