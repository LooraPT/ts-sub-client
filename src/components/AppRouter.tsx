import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { privateRoutes, publicRoutes, RouteNames } from '../router';

const AppRouter: FC = () => {
    const { auth } = useAppSelector(state => state.user)

    return (
        <Routes>
            {auth && privateRoutes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            )}
            {publicRoutes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            )}
            <Route
                path="*"
                element={<Navigate to={RouteNames.MAIN} replace />}
            />
        </Routes>
    );
}

export default AppRouter;