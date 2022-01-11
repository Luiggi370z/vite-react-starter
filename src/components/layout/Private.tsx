import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LoadingPage } from '@/pages';

const LayoutPrivate = () => (
  <div className="flex flex-1 flex-row w-full">
    <div className="w-16 h-full flex flex-col flex-shrink border-collapse">
      <div>My Menu</div>
    </div>

    <div className="flex w-full h-full">
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    </div>
  </div>
);

export default LayoutPrivate;
