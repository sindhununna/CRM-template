import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { Routes,Route} from "react-router-dom";
import { useState } from "react";


function App() {
  const [flag, setFlag] = useState(false);
  const [apiData, setApiData] = useState([]);
 
  return (
    <div className="container">
      <h1>CRM Template</h1><br /><br />
      <div className="main">
        <Routes>
          <Route path="/" element={<Read setFlag={setFlag} apiData={apiData} setApiData={setApiData} />}/>
          <Route path="create" element={<Create flag={flag} apiData={apiData} setApiData={setApiData}/>}/>
          <Route path="update" element={<Update />}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;