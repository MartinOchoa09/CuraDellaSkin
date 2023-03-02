import { Outlet, Navigate } from "react-router-dom";
function ProtectedParentRouter({isLoged}) {
    return ( 
        isLoged ? <Outlet/> : <Navigate to={"/login"}/>
     );
}

export default ProtectedParentRouter;