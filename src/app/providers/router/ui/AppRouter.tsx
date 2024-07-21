import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { HeaderAndFooter } from 'app/providers/HeaderAndFooter/ui/HeaderAndFooter';

const AppRouter = () => (
    <HeaderAndFooter>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper w-full flex-1 mt-24">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    </HeaderAndFooter>
);

export default AppRouter;
