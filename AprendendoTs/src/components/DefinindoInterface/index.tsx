import React, { FC } from "react";
import styles from "./styles.module.css";

//  Definindo a interface das props do componente
interface Props {
   nome: string; //  ?: serve para dizer que a prop é opcional
   idade: number;
   casado: boolean;
}

const DefinindoInterface: FC<Props> = ({ nome, idade, casado }) => {
   return (
      <div id={styles.ct}>
         <h1>Definindo Interface</h1>
         <p>O nome é: {nome}</p>
         <p>A idade é: {idade}</p>
         <p>Estado civil: {casado === true ? "casado" : "solteiro"}</p>
      </div>
   );
};

export default DefinindoInterface;
