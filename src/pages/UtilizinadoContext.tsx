import { useContext } from "react";
import { ContextSimples } from "../context/Simples/ContextSimples";

const UtilizinadoContext = () => {
   const estado = useContext(ContextSimples);
   return <div>UtilizinadoContext</div>;
};
export default UtilizinadoContext;
