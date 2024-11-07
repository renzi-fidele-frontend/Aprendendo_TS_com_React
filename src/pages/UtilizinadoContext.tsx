import { useContext, useEffect } from "react";
import { ContextSimples } from "../context/Simples/ContextSimples";

const UtilizinadoContext = () => {
   const estado = useContext(ContextSimples);

   useEffect(() => {
      console.log(estado?.tema);
   }, [estado?.tema]);

   return <div>UtilizinadoContext</div>;
};

export default UtilizinadoContext;
