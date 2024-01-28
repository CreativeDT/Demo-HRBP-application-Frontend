import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import image from "../Image Container/image.jpg";
import "./Home.css";
import Table from "../Display Data Component/Table";

function Home() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]); // state management for the API datas to be fetched, using [Fetch API] of React.
  const [error, setError] = useState(null);

  //   const [formData, setFormData] = useState({
  //     //state management for the form input data.
  //     Employee_id: "",
  //     password: "",
  //   });

  //   const handleInputChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value, // used to set the input values of form while submitting.
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     //Fetch data from here using form data.
  //     // dataFetchHandler(formData);

  //     //reseting form input field after fetching data from API.
  //     setFormData({
  //       Employee_id: " ",
  //       password: " ",
  //     });
  //   };

  useEffect(() => {
    //calling API request insdie useeffect
    dataFetchHandler();
  }, []);

  const dataFetchHandler = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLoginClick = () => {
    // Navigate to "/dataTable" with apiData as state
    navigate("/dataTable", { state: { apiData } });
  };

  return (
    <Fragment>
      <div className="full-forms">
        <div className="formContainer-left">
          <p className="headline"></p>
          <img src={image} alt="image" className="img"></img>
        </div>
        <div className="formContainer-right">
          <form className="form">
            <div className="signup login">
              <h3>Welcome Creator</h3>
            </div>
            <div className="form-inputs">
              <div className="form-inputs">
                <TextField
                  className="form-lable form-input fname textfield"
                  id="Employee_id"
                  type="number"
                  name="Employee_id"
                  htmlFor="Employee_id"
                  label="Employee ID"
                  onInput={(e) => {
                    //for restricting the input feild to 6 characters
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 6);
                  }}
                  size="small"
                  sx={{
                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                      {
                        display: "none",
                      },
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                  }}
                  //   value={formInput.Employee_id}
                  //   onChange={handleInputChange}
                  InputLabelProps={{ className: "textfiled__lable" }}
                />
              </div>

              <div className="form-inputs">
                <TextField
                  className="form-lable form-input fname textfield"
                  id="password"
                  type="password"
                  name="password"
                  htmlFor="password"
                  label="Password"
                  size="small"
                  //   value={formInput.password}
                  //   onChange={handleInputChange}
                  InputLabelProps={{ className: "textfiled__lable" }}
                />
              </div>

              <button type="submit" onClick={handleLoginClick} className="btn">
                Login
              </button>
            </div>
            <div className="bottom_cnt">
              <div>
                <a href="#" className="link forgotPassword">
                  Forgot Password
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
