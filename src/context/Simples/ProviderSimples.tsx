import { ReactNode } from "react";
import { IContext, ContextSimples } from "./ContextSimples";

interface IProviderSimples {
   children: ReactNode;
}

const Simples = ({ children }: IProviderSimples) => {
   const initialValue: IContext = { paginaAtual: 0, tema: "claro" };

   return <ContextSimples.Provider value={initialValue}>{children}</ContextSimples.Provider>;
};
export default Simples;
