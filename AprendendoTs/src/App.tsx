import "./App.css";
import DefinindoInterface from "./components/DefinindoInterface";
import DefinindoTipo from "./components/DefinindoTipo";
import { FC } from "react";

const App: FC = () => {
   const nome: string = "Renzi Fidele";
   const idade: number = 22;
   const casado: boolean = false;

   return (
      <>
         <DefinindoTipo />
         <DefinindoInterface key={1} nome={nome} casado={casado} idade={idade} />
      </>
   );
};

export default App;
