import { useRoutes } from 'react-router-dom';

import routes from '@/routes';

const MyNavigationComponent = () => <>{useRoutes(routes)}</>;

export default MyNavigationComponent;
