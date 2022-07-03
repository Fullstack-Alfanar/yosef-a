import { useRoutes } from "react-router-dom";
import AddShoe from "../pages/AddShoe";
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
            element: <AddShoe />
        },
        {
            path: "/addEmployee",
            element: <><h1>AddEmployee</h1></>
        }
    ]);
}

export default AppRouter;