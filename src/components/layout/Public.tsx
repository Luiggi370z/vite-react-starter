import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LoadingPage } from '@/pages';

const LayoutPublic = () => {
  return (
    <div className="w-full flex">
      <div className="w-2/4 flex flex-col justify-between py-16 px-14 bg-gray-100">
        <div>My public layout</div>
      </div>

      <div className="w-2/4 bg-white py-16 flex justify-center">
        <div className="w-2/4">
          <Suspense fallback={<LoadingPage />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default LayoutPublic;
