import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { fireDb } from "../firebase";
function DropDown(props) {
  const dropBtn = document.getElementsByClassName("drop-btn");
  const menuWrapper = document.getElementsByClassName("wrapper");

  const dikha = (e) => {
    menuWrapper[0].classList.toggle("show");
  };
  console.log("user in drop =>", props.user);

  const signOut = () => {
    fireDb
      .auth()
      .signOut()
      .then(function () {
        alert("Sign-out successful.");
        // Sign-out successful.
      })
      .catch(function (error) {
        alert(" An error happened.");
        // An error happened.
      });
  };

  useEffect(() => {
    fireDb.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("salman drop down user.na", user);
        // setUser({
        //   userName: user.na,
        //   userPhone: user.phoneNumber,

        // });
      } else {
        // No user is signed in.
      }
    });
  }, []);

  return (
    <div className="dropdown-container">
      <div className="drop-btn" onClick={(e) => dikha()}>
        <span className="fleft">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span className="fright">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
      <div className="wrapper">
        <ul className="menu-bar">
          <li>
            <Link>
              {/* <div className="icon">
                <span>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </span>
              </div> */}
              Hey {}
            </Link>
          </li>
          <li>
            <Link onClick={signOut}>
              <div className="icon">
                <span>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </span>
              </div>
              LogOut
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
