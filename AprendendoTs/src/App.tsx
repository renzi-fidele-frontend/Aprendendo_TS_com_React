import "./App.css";
import DefinindoEstado from "./components/DefinindoEstado";
import DefinindoEvento from "./components/DefinindoEvento";
import DefinindoInterface from "./components/DefinindoInterface";
import DefinindoTipo from "./components/DefinindoTipoVariavel";
import { FC } from "react";

const App: FC = () => {
   const nome: string = "Renzi Fidele";
   const idade: number = 22;
   const casado: boolean = false;

   return (
      <>
         <DefinindoTipo />
         <DefinindoInterface key={1} nome={nome} casado={casado} idade={idade} />
         <DefinindoEstado />
         <DefinindoEvento />
      </>
   );
};

export default App;
