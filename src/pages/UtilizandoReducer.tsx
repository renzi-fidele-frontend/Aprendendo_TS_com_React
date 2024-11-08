import { useContext, useEffect } from "react";
import { EquipeContext } from "../context/ComReducer/ContextComReducer";

const UtilizandoReducer = () => {
   const { dispatch, pontuacao, nome } = useContext(EquipeContext);

   useEffect(() => {
      dispatch({ type: "somar", payload: 2 });
      console.log(pontuacao);
   }, []);

   return (
      <div>
         <p>Nome da equipe: {nome}</p>
         <p>Pontuação: {pontuacao}</p>
      </div>
   );
};
export default UtilizandoReducer;
