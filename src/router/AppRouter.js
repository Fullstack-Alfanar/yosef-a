import { useRoutes } from "react-router-dom";
import AddShoePage from "../pages/AddShoePage";
import ShoePage from "../pages/ShoePage";
import EmployeesPage from "../pages/EmployeesPage"
import AddEmployeesPage from "../pages/AddEmployeePage"
function AppRouter() {
    return useRoutes([
        {
            path: "/",
            element: <ShoePage />
        },
        {
            path: "/employees",
            element: <EmployeesPage />
        },
        {
            path: "/addShoe",
            element: <AddShoePage />
        },
        {
            path: "/addEmployee",
            element: <AddEmployeesPage />
        }
    ]);
}

export default AppRouter;