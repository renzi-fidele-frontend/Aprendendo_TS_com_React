import React, { FC } from "react";

const DefinindoEvento: FC = () => {
   const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log("Clicaste no botao");
   };

   return (
      <div>
         <button onClick={handleClick}></button>
      </div>
   );
};

export default DefinindoEvento;
