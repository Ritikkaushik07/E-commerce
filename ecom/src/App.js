import Home from "./components/Home";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Jewelerys from "./components/Jewelerys";
import Electronic from "./components/Electronic";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
        <Routes>
            <Route path="/Mens" element={<Mens/>} ></Route>
            <Route path="/Womens" element={<Womens/>} ></Route>
            <Route path="/Electronic" element={<Electronic/>} ></Route>
            <Route path="/Jewelerys" element={<Jewelerys/>} ></Route>
        </Routes>
     <Home/>
     {/* <Electronic/>
     <Jewelerys/>
 <Womens/>
<Mens/> */}
    </div>
  
  );
}

export default App;
