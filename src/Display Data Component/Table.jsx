import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import TextArea from "./TextArea";
import TimeLine from "./TimeLine";
import "./Table.css";

function Table() {
  const location = useLocation();
  const apiData = location?.state?.apiData || [];

  return (
    <div className="display data">
      <div className="nav bar">
        <Navbar />
      </div>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Emp-ID</th>
              <th>Name</th>
              <th>Email-ID</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="timeline">
        <TimeLine />
      </div>
      <div className="text-area">
        <label>Review note:</label>
        <TextArea />
      </div>
    </div>
  );
}

export default Table;
