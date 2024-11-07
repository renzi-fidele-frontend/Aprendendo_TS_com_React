import { FC } from "react";

//  Definindo a interface das props do componente
interface Props {
   nome: string; //  ?: serve para dizer que a prop é opcional
   idade: number;
   casado: boolean;
}

const DefinindoInterface: FC<Props> = ({ nome, idade, casado }) => {
   return (
      <div>
         <h1>Definindo Interface</h1>
         <p>O nome é: {nome}</p>
         <p>A idade é: {idade}</p>
         <p>Estado civil: {casado === true ? "casado" : "solteiro"}</p>
      </div>
   );
};

export default DefinindoInterface;
