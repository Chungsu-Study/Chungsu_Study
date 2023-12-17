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
import Video from "./pages/TestPage/video";
import Video1 from "./pages/TestPage/video1";
import Video2 from "./pages/TestPage/video2";
import Video3 from "./pages/TestPage/video3";
import Video4 from "./pages/TestPage/video4";
import Video5 from "./pages/TestPage/video5";
import Video6 from "./pages/TestPage/video6";
import Video7 from "./pages/TestPage/video7";
import Video8 from "./pages/TestPage/video8";
import Video9 from "./pages/TestPage/video9";
import { Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <AnimatePresence>
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
        <Route path="/video0">
          <Video />
        </Route>
        <Route path="/video1">
          <Video1 />
        </Route>
        <Route path="/video2">
          <Video2 />
        </Route>
        <Route path="/video3">
          <Video3 />
        </Route>
        <Route path="/video4">
          <Video4 />
        </Route>
        <Route path="/video5">
          <Video5 />
        </Route>
        <Route path="/video6">
          <Video6 />
        </Route>
        <Route path="/video7">
          <Video7 />
        </Route>
        <Route path="/video8">
          <Video8 />
        </Route>
        <Route path="/video9">
          <Video9 />
        </Route>
      </AnimatePresence>
    </div>
  );
}

export default App;
