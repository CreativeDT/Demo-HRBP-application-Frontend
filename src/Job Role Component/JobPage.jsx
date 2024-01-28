import React, { useState, useEffect } from "react";
import Hrbp from "./Hrbp";
import Hrbu from "./Hrbu";
import Managers from "./Managers";
import Home from "../Form Components/Home";
const JobPage = () => {
  const [jobRoles, setJobRoles] = useState([]);

  // Fetch job roles from the API
  useEffect(() => {
    // Make an API request and update the state with job roles
    fetch("https://api.example.com/job-roles") 
      .then((response) => response.json())
      .then((data) => setJobRoles(data.jobRoles))
      .catch((error) => console.error("Error fetching job roles:", error));
  }, []);

  // Render different content based on job roles
  const renderPageContent = () => {
    // Assuming jobRoles is an array of role names obtained from the API
    if (jobRoles.includes("Hrbp")) {
      return <Hrbp />;
    } else if (jobRoles.includes("Hrbu")) {
      return <Hrbu />;
    } else if (jobRoles.includes("Managers")) {
      return <Managers />;
    } else {
      // Default page if the role is not recognized
      return <Home />;
    }
  };

  return (
    <div>
      <h1>Job Page</h1>
      {renderPageContent()}
    </div>
  );
};

export default JobPage;
