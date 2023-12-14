import "./App.css";
import Tlisu from "./pages/TestPage/lisujin";
import Main from "./pages/TestPage/Main";
import Teachers from "./pages/TestPage/Teachers";
import Dongil from "./pages/TestPage/dongil";
import Hoyung from "./pages/TestPage/hoyung";
import Lisun from "./pages/TestPage/lisun";
import Soyun from "./pages/TestPage/soyun";
import Sunghun from "./pages/TestPage/sunghun";
import Yanggun from "./pages/TestPage/yanggun";
import Yungteak from "./pages/TestPage/yungteak";
import Yunwo from "./pages/TestPage/yunwo";
import Ziyun from "./pages/TestPage/ziyun";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/teachers">
        <Teachers />
      </Route>  
      <Route path="/lisujin">
        <Tlisu />
      </Route>  
      <Route path="/dongil">
        <Dongil />
      </Route>
      <Route path="/hoyung">
        <Hoyung />
      </Route>
      <Route path="/lisun">
        <Lisun />
      </Route>
      <Route path="/soyun">
        <Soyun />
      </Route>
      <Route path="/sunghun">
        <Sunghun />
      </Route>
      <Route path="/yanggun">
        <Yanggun />
      </Route>
      <Route path="/yungteak">
        <Yungteak />
      </Route>
      <Route path="/yunwo">
        <Yunwo />
      </Route>
      <Route path="/ziyun">
        <Ziyun />
      </Route>
    </div>
  );
}

export default App;
