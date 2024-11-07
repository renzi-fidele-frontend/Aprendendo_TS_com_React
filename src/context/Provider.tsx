import { ReactNode } from "react";
import { IContext, appContext } from "./Context";

interface IProvider {
   children: ReactNode;
}

const Provider = ({ children }: IProvider) => {
   const initialValue: IContext = { paginaAtual: 0, tema: "claro" };

   return <appContext.Provider value={initialValue}>{children}</appContext.Provider>;
};
export default Provider;
