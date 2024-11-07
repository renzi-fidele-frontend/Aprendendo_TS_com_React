import { createContext, Dispatch } from "react";

export interface IEquipeState {
   nome: string;
   pontuacao: number;
   loading: boolean;
}

// Definindo as actions do meu reducer
export type IEquipeActions =
   | { type: "somar"; payload: number }
   | { type: "subtrair"; payload: number }
   | { type: "resetar" }
   | { type: "setLoading"; payload: boolean };

export const EquipeState = { nome: "Barcelona", pontuacao: 10, loading: false };

type ContextType = IEquipeState & { dispatch: Dispatch<IEquipeActions> };

export const EquipeContext = createContext<ContextType>({ ...EquipeState, dispatch: () => {} });
