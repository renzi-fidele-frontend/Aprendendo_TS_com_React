import React, { FC } from "react";

const DefinindoEvento: FC = () => {
   const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log("Clicaste no botao");
   };

   return (
      <div>
         <button onClick={handleClick}>Clique em mim</button>
      </div>
   );
};

export default DefinindoEvento;
