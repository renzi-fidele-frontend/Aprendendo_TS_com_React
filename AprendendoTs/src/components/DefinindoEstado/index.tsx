import React, { FC, useContext, useEffect, useState } from "react";
import { context } from "../../App";

const DefinindoEstado: FC = () => {
   const estado = useContext(context);
   useEffect(() => {
      console.log(estado);
   }, [estado]);

   const [Texto, setTexto] = useState<string>("");

   return (
      <div>
         <p>{Texto}</p>
      </div>
   );
};

export default DefinindoEstado;
