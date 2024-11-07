import { createContext } from "react";

/** Este Simples Provider apenas fornece dados e não atualiza eles. */
export interface IContext {
   tema: "claro" | "escuro";
   paginaAtual: number;
}

export const ContextSimples = createContext<IContext | null>(null);
