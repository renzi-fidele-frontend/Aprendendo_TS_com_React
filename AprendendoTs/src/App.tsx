import "./App.css";
import DefinindoEstado from "./components/DefinindoEstado";
import DefinindoEvento from "./components/DefinindoEvento";
import DefinindoInterface from "./components/DefinindoInterface";
import DefinindoTipo from "./components/DefinindoTipoVariavel";
import { FC, createContext } from "react";
import DefinindoType from "./components/DefinindoType";
import DefinindoEnum from "./components/DefinindoEnum";

// No Ts é obrigatório definir a interface do contexto
interface contextInterface {
   nome: string;
   idade: number;
   casado: boolean;
}

export const context = createContext<contextInterface | null>(null);

const App: FC = () => {
   const ContextValue: contextInterface = {
      nome: "Renzi Fidele",
      idade: 23,
      casado: false,
   };

   return (
      <div className="App">
         <context.Provider value={ContextValue}>
            <DefinindoTipo />
            <DefinindoInterface key={1} nome={ContextValue.nome} casado={ContextValue.casado} idade={ContextValue.idade} />
            <DefinindoEstado />
            <DefinindoEvento />
            <DefinindoEnum />
            <DefinindoType />
         </context.Provider>
      </div>
   );
};

export default App;
