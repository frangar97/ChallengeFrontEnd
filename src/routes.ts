import { IRoute } from "./interfaces/IRoute";
import { EmployeePage, ShopPage } from "./pages";

const routes: IRoute[] = [
    {
        name: "Shop",
        path: "/",
        Component: ShopPage
    },
    {
        name: "Employee",
        path: "/employee",
        Component: EmployeePage
    },
    {
        name: "ShopEmployee",
        path: "/shopemployee",
        Component: ShopPage
    },
];

export default routes;