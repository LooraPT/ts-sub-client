import Error from "../pages/Error";
import Faq from "../pages/Faq";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Subscription from "../pages/Subscription";


export interface IRoute {
    path: string;
    element: React.ReactElement;
}

export enum RouteNames {
    FAQ = '/faq',
    MAIN = '/',
    PROFILE = '/profile',
    SUBSCRIPTION = '/subscription',
    ERROR = '/error'
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.MAIN,
        element: <Main />
    },
    {
        path: RouteNames.FAQ,
        element: <Faq />
    },
    {
        path: RouteNames.SUBSCRIPTION + '/:id',
        element: <Subscription />
    },
    {
        path: RouteNames.ERROR,
        element: <Error />
    }
]

export const privateRoutes: IRoute[] = [
    {
        path: RouteNames.PROFILE,
        element: <Profile />
    }
]