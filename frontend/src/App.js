import * as Vsc from "react-icons/vsc";
import Upload from "./components/Upload";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App vh-100 d-flex flex-column justify-content-between position-relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="upload" element={<Upload />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </BrowserRouter>



    // 
    //   <div className="main">
    //       {/* <Header/> */}
    //       {/* <Gallery /> */}
    //       {/* <Upload/> */}
    //   </div>



  );
}

export default App;
