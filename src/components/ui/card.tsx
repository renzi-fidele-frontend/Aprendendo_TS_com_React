import { ReactNode } from "react";

// Metodo 1
const card = ({ children }: { children: ReactNode }) => {
   return <div style={{ padding: "1rem", border: "1px solid black" }}>{children}</div>;
};

export default card;
