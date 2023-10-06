import React, { FC, useState } from "react";

const DefinindoEstado: FC = () => {
   const [Texto, setTexto] = useState<string>("");

   return (
      <div>
         <p>{Texto}</p>
      </div>
   );
};

export default DefinindoEstado;
