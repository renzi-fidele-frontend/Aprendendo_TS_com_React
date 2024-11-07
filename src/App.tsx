import "./App.css";
import Provider from "./context/Provider";
import UtilizinadoContext from "./pages/UtilizinadoContext";

const App = () => {
   return (
      <div className="App">
         <Provider>
            <UtilizinadoContext />
         </Provider>
      </div>
   );
};

export default App;
