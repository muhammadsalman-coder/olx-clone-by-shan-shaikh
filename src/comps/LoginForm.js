import React, { useEffect, useState } from "react";
import "./loginform.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowLeft, faCamera, faSpinner } from "@fortawesome/free-solid-svg-icons";

import firebase from "../firebase";

function LoginForm(props) {
  var initialState = {
    phone: "",
    code: "",
    username: "",
  };
  console.log("props =>>", props);
  const [values, setvalues] = useState(initialState);
  const [isuser, setisuser] = useState(false);
  console.log("valuesssss", values);

  if (isuser) {
    props.history.push("../");
    props.history.location.state = isuser;
  }

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    window.recaptchaVerifier.render();
  }, []);

  const [coderesult, setcoderesult] = useState();
  console.log("coderesult ====>", coderesult);
  const phoneAuth = () => {
    var phoneNumber = values.phone;
    console.log("phoneNumber =>", phoneNumber);
    var appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;

        console.log("confirmationResult", confirmationResult);
        //alert("Message Sent");

        var code = window.prompt("  Message Sended.... \n Enter OTP", "enter otp");
        confirmationResult
          .confirm(code)
          .then(function (result) {
            // User signed in successfully.
            // result.user.na = values.name;
            setcoderesult(result.user.na);

            // var user = result.user;
            // console.log("user", user);
            setisuser(true);

            // ...
          })
          .catch(function (error) {
            // User couldn't sign in (bad verification code?)
            // ...
          });
      })
      .catch(function (error) {
        // Error; SMS not sent
        alert("Something went Wrong", error);
      });
  };

  useEffect(() => {
    console.log(" values.name", values.username);
    if (values.username == "") {
      console.log(" values.name", values.username);
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          user
            .updateProfile({
              displayName: values.username,
              photoURL: "manga hi nahiii",
            })
            .then(function () {
              // Update successful.
              console.log("update succesfully ......................");
            })
            .catch(function (error) {
              // An error happened.
            });
          // User is signed in.
        } else {
          // No user is signed in.
        }
      });
    } else {
      console.log("mazak ho rha hai      ");
    }
    // var user = firebase.auth().currentUser;
    // console.log("main user ", user);
    // firebase.auth().onAuthStateChanged(function (user) {
    //   user
    //     .updateProfile({
    //       displayName: values.name,
    //       photoURL: "manga hi nahi",
    //     })
    //     .then(function () {
    //       // Update successful.
    //       console.log("update succesfully ......................");
    //     })
    //     .catch(function (error) {
    //       // An error happened.
    //     });
    // });
  }, []);

  // console.log("values =>", values);

  const handleInputChange = (event) => {
    event.preventDefault();
    var { name, value } = event.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="post-nav ">
        <div className="nav-content flex">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="icons aic icon-back s20" />
          </Link>
          <img src={require("../ui/logo.png")} alt="OLX Logo" className="aic" />
        </div>
      </div>

      <div className="login-form-container flex">
        <div className="login-form-inner jcc">
          <h1 className="fontb textc login-heading">Login & Register</h1>
          <form className="textc">
            <div className="flex ml20">
              <label className="font s20">Phone :</label>
              <input
                type="text"
                id="number"
                value={values.phone}
                name="phone"
                onChange={handleInputChange}
                placeholder="+92300*******"
              />
            </div>
            <div className="flex ml20">
              <label className="font s20">Name :</label>
              <input
                type="text"
                id="name"
                value={values.username}
                name="username"
                onChange={handleInputChange}
                placeholder="Enter Name"
              />
            </div>
            <div id="recaptcha-container" className="ml20"></div>

            {isuser ? (
              <Link to="/">Go Home</Link>
            ) : (
              <button class="send-btn" type="button" onClick={phoneAuth}>
                Send Code
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
