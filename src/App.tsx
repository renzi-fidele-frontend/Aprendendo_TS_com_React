import "./App.css";
import { FC, createContext } from "react";

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
         <context.Provider value={ContextValue}></context.Provider>
      </div>
   );
};

export default App;
