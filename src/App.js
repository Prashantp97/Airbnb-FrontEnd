import "./App.css";

import ReactNavBar from "./ReactNavBar";

import "bootstrap/dist/css/bootstrap.min.css";

import ReactImg from "./ReactImg";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <ReactNavBar />
    <div className="App">
     <Routes>
     <Route path="/" element={  <ReactImg />}/>
      <Route path="/place" element={ <Main />}/>
     </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
