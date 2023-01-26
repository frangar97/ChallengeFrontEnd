import { IRoute } from "./interfaces/IRoute";
import { EmployeePage, ShopEmployeePage, ShopPage } from "./pages";

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
        Component: ShopEmployeePage
    },
];

export default routes;