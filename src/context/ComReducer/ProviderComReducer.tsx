import { ReactNode, Reducer, useReducer } from "react";
import { EquipeContext, IEquipeActions, IEquipeState } from "./ContextComReducer";

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
   const [estado, dispatch] = useReducer<Reducer<IEquipeState, IEquipeActions>>(reducer, { nome: "Barcelona", pontuacao: 10, loading: false });

   return <EquipeContext.Provider value={{ ...estado, dispatch }}>{children}</EquipeContext.Provider>;
};

export default ProviderComReducer;
