import { useContext } from "react";
import { appContext } from "../context/Context";

const UtilizinadoContext = () => {
   const estado = useContext(appContext);
   return <div>UtilizinadoContext</div>;
};
export default UtilizinadoContext;
