import { ReactNode, Reducer, useReducer } from "react";
import { EquipeContext, EquipeState, IEquipeActions, IEquipeState } from "./ContextComReducer";

//  Configurando o reducer

const ProviderComReducer = ({ children }: { children: ReactNode }) => {
   function reducer(estado: IEquipeState, action: IEquipeActions): IEquipeState {
      switch (action.type) {
         case "resetar":
            return { ...estado, pontuacao: NaN };
         case "setLoading":
            return { ...estado, loading: action.payload };
         case "somar":
            return { ...estado, pontuacao: estado.pontuacao + action.payload };
         case "subtrair":
            return { ...estado, pontuacao: estado.pontuacao - action.payload };
         default:
            return estado;
      }
   }
   const [estado, dispatch] = useReducer<Reducer<IEquipeState, IEquipeActions>>(reducer, EquipeState);

   dispatch({ type: "somar", payload: 2 });

   return <EquipeContext.Provider value={{ ...estado, dispatch }}>{children}</EquipeContext.Provider>;
};

export default ProviderComReducer;
