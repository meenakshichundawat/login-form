import React, { useState } from "react";
import "./App.css";
import axios from "axios"

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

   const response = await axios.post("API", {
      username,
      password
    }).catch(e => console.log(e));

    console.log(response);

    setUsername('')
    setPassword('')

  }
    return (
      <div className="container">

        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
              LOGIN FORM
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-user"></i></span>
                </div>

                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username" />

              </div>
              <div className="input-group mb-3">

                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-lock"></i></span>
                </div>

                <input type="password" value={password} onChange={(e) => setPassword(e.target.value) } className="form-control" placeholder="Password" />

              </div>
              <button type="button" onClick={(e) => handleSubmit(e)} className="btn btn-secondary btn-block">LOGIN</button>
              <div className="message">
                <div><input type="checkbox" /> Remember ME</div>
                <div><a href="#">Forgot your password</a></div>
              </div>
            </form>
            <div className="social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter-square"></i></a>
              <a href="#"><i className="fab fa-google"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }

