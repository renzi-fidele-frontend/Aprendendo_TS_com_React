import { useContext, useEffect } from "react";
import { EquipeContext } from "../context/ComReducer/ContextComReducer";

const UtilizandoReducer = () => {
   const { dispatch } = useContext(EquipeContext);

   useEffect(() => {
      dispatch({ type: "somar", payload: 2 });
   }, [dispatch]);

   return <div>UtilizandoReducer</div>;
};
export default UtilizandoReducer;
