import * as Vsc from "react-icons/vsc";
import Upload from "./components/Upload";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-between">
      <div className="main">
          <Header/>
          <Gallery />
          {/* <Upload/> */}
      </div>

      <div className="footer text-center py-3">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
