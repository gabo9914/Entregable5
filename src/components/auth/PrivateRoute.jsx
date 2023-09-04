import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import PokeballHeader from "../layout/PokeballHeader";

const PrivateRoute = () => {
  const { name } = useSelector((store) => store.trainer);

  if (name) 
    return (
      <PokeballHeader>
        <Outlet />
      </PokeballHeader>
  );
   return <Navigate to="/" />;
};
export default PrivateRoute;
