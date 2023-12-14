import "./App.css";
import Tlisu from "./pages/TestPage/lisujin";
import Main from "./pages/TestPage/Main";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Main /> 
      </Route>
      <Route path="/lisujin">
        <Tlisu />
      </Route>  
    </div>
  );
}

export default App;
