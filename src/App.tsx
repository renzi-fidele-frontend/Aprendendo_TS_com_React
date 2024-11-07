import "./App.css";
import TemplateLiterals from "./components/TemplateLiterals/TemplateLiterals";
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
         <TemplateLiterals />
      </div>
   );
};

export default App;
