import React, { useState, useEffect } from "react";

import Home from "./Form Components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Table from "./Display Data Component/Table";
import Hrbp from "../src/Job Role Component/Hrbp";
import Hrbu from "../src/Job Role Component/Hrbu";
import Managers from "../src/Job Role Component/Managers";
import JobPage from "./Job Role Component/JobPage";
function App() {
  // const[role, setRole] = useState();
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('your-api-endpoint');
  //       const data = await response.json();

  //       // Assuming the API response has a field named 'Role'
  //       // setRole(data.Role);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dataTable" element={<Table />} />
        </Routes>
      </Router>

      {/* {Role === 'hrbp' ? <Hrbp /> : <Home />}
      {Role === 'hrbu' ? <Hrbu /> : <Home />}
      {Role === 'manager' ? <Managers/> : <Home />} */}
      {/* <JobPage /> */}
    </div>
  );
}

export default App;
