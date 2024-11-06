import { useContext, useEffect, useState } from "react";
import { context } from "../../App";

const DefinindoEstado = () => {
   // Utilizando o valor do context
   const estado = useContext(context);
   useEffect(() => {
      console.log(estado);
   }, [estado]);

   // Opcional pois o TS automaticamente identifica o tipo
   const [Texto, setTexto] = useState<string>("");

   // Deverei utilizar este método normal de sempre
   const [numero, setNumero] = useState(0);

   return (
      <div>
         <p>{Texto}</p>
         {/* Atualizar estado na mudanca do valor do input */}
         <input type="text" placeholder="Escreva para alterar" onChange={(e) => setNumero(Number(e.target.value))} />
      </div>
   );
};

export default DefinindoEstado;
