import { createContext, Dispatch } from "react";

export interface IEquipeState {
   /** Nome da equipe de futebol. */
   nome: string;
   /** Número de pontos acumulados pela equipe na liga. */
   pontuacao: number;
   loading: boolean;
}

// Definindo as actions do meu reducer
export type IEquipeActions =
   | { type: "somar"; payload: number }
   | { type: "subtrair"; payload: number }
   | { type: "resetar" }
   | { type: "setLoading"; payload: boolean };

type ContextType = IEquipeState & { dispatch: Dispatch<IEquipeActions> };

// Garanto ao TS que o objeto será entregue como o desejado, só que o farei mais a frente e não logo aqui, deverei utilizar sempre está prática
export const EquipeContext = createContext<ContextType>({ ...({} as IEquipeState), dispatch: () => {} });
