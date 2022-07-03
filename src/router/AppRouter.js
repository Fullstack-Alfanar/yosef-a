import { useRoutes } from "react-router-dom";
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
        }
    ]);
}

export default AppRouter;