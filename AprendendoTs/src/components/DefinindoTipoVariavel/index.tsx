import React, { useEffect } from "react";

const DefinindoTipo = () => {
   //  Definindo tipo de variável
   const nome: string = "Renzi Fidele";
   const idade: number = 22;
   const casado: boolean = false;

   //   Definindo o tipo que será retornado na função
   const getNome = (nome: string): number => {
      if (nome === "Renzi Fidele") {
         return 20;
      } else {
         return 0;
      }
   };

   //   Caso a função não retorne nada devo definir o tipo para void
   const semRetorno = (idade: number): void => {
      // Pessoas gostam de não definir o tipo dos parametros quando é void
      console.log(`A idade é: ${idade}`);
   };

   useEffect(() => {
      semRetorno(50);
      getNome("Pedro");
   }, []);

   return (
      <div>
         <h1>Definindo Tipo</h1>
         <p>Nome: {nome}</p>
         <p>Idade: {idade}</p>
         <p>É casado? {casado === false ? "Não" : "Sim"}</p>
      </div>
   );
};

export default DefinindoTipo;
