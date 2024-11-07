import "./App.css";
import ProviderComReducer from "./context/ComReducer/ProviderComReducer";
import ProviderSimples from "./context/Simples/ProviderSimples";
import UtilizandoReducer from "./pages/UtilizandoReducer";
import UtilizinadoContext from "./pages/UtilizinadoContext";

const App = () => {
   return (
      <div className="App">
         <ProviderSimples>
            <UtilizinadoContext />
         </ProviderSimples>
         <ProviderComReducer>
            <UtilizandoReducer />
         </ProviderComReducer>
      </div>
   );
};

export default App;
