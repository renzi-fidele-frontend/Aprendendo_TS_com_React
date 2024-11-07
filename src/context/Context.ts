import { createContext } from "react";

export interface IContext {
   tema: "claro" | "escuro";
   paginaAtual: number;
}

export const appContext = createContext<IContext | null>(null);
