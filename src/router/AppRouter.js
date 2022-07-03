import { useRoutes } from "react-router-dom";
import AddShoePage from "../pages/AddShoePage";
import ShoePage from "../pages/ShoePage";
function AppRouter() {
    return useRoutes([
        {
            path: "/",
            element: <ShoePage />
        },
        {
            path: "/employees",
            // temporary
            element: <><h1>Employee</h1></>
        },
        {
            path: "/addShoe",
            element: <AddShoePage />
        },
        {
            path: "/addEmployee",
            element: <><h1>AddEmployee</h1></>
        }
    ]);
}

export default AppRouter;