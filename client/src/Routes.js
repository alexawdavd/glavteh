import {ADMIN_ROUTE, BASKET_ROUTE, JOURNAL_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REG_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import JournalPage from "./pages/JournalPage";
import Main from "./pages/Main";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REG_ROUTE,
        Component: Auth
    },
    {
        path: JOURNAL_ROUTE + '/:id',
        Component: JournalPage
    }
]