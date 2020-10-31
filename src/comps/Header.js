import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Props.css";

import { Link } from "react-router-dom";
import { faChevronDown, faSearch, faPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { fireDb } from "../firebase";

import DropDown from "./DropDown";
function Header(props) {
  var check_initial = {
    userName: "",
    userPhone: "",
  };
  const [user, setUser] = useState(check_initial);

  const [check, setCheck] = useState(false);
  console.log("user check in header =>", check);
  console.log("user user user =>", user);

  useEffect(() => {
    fireDb.auth().onAuthStateChanged(function (user) {
      if (user) {
        setCheck(true);

        console.log("shaaaan", user);
        setUser({
          userName: user.na,
          userPhone: user.phoneNumber,
        });
      } else {
        setCheck(false);
        // No user is signed in.
      }
    });
  }, []);

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

  const nav = [
    { ID: 1, label: "Mobile-Phones" },
    { ID: 2, label: "Cars" },
    { ID: 3, label: "Motorcycles" },
    { ID: 4, label: "Furniture" },
    { ID: 5, label: "TV-Video-Audio" },
    { ID: 6, label: "Fashion" },
    { ID: 7, label: "Jobs" },
  ];

  return (
    <React.Fragment>
      <div className="header fixed flex aic">
        <Link to="/">
          <div className="logo">
            <img src={require("../ui/logo.png")} alt="OLX Logo" />
          </div>
        </Link>
        <div className="location rel flex aic">
          <FontAwesomeIcon icon={faSearch} className="ico s24" />

          <input className="label s15 font" placeholder="Your Location" value="Pakistan" />
          <button className="arro-down">
            <FontAwesomeIcon icon={faChevronDown} className=" s24" />
          </button>
        </div>
        <div className="search flex aic">
          <input type="text" placeholder="Find Cars,Mobile Phones and more..." className="query font s15" />
          <button className="go">
            <FontAwesomeIcon icon={faSearch} className=" cfff s24" />
          </button>
        </div>
        <div className="actions flex aic">
          {check ? (
            <DropDown user={user} />
          ) : (
            <Link to="/account/signin" className="color fontb s16 noul noulh">
              Login
            </Link>
          )}

          {check ? (
            <React.Fragment>
              <button class="_21nYN aic ">
                <Link to="/post">
                  <svg width="104" height="48" viewBox="0 0 1603 768" class="_3V9PS">
                    <g>
                      <path
                        class="_2bClX _12yOz"
                        d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"
                      ></path>
                      <path
                        class="_2bClX _YBz-"
                        d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"
                      ></path>
                      <path
                        class="_2bClX _3uYj7"
                        d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"
                      ></path>
                      <path
                        class="_2bClX BfroU"
                        d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"
                      ></path>
                    </g>
                  </svg>
                  <div class="DrSmZ">
                    <span class="EgzsJ">
                      <svg
                        width="16px"
                        height="16px"
                        viewBox="0 0 1024 1024"
                        data-aut-id="icon"
                        class=""
                        fill-rule="evenodd"
                      >
                        <path
                          class="rui-367TP"
                          d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"
                        ></path>
                      </svg>
                    </span>
                    <span>Sell</span>
                  </div>
                </Link>
              </button>
            </React.Fragment>
          ) : (
            <button class="_21nYN aic ">
              <svg width="104" height="48" viewBox="0 0 1603 768" class="_3V9PS">
                <g>
                  <path
                    class="_2bClX _12yOz"
                    d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"
                  ></path>
                  <path
                    class="_2bClX _YBz-"
                    d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"
                  ></path>
                  <path
                    class="_2bClX _3uYj7"
                    d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"
                  ></path>
                  <path
                    class="_2bClX BfroU"
                    d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"
                  ></path>
                </g>
              </svg>
              <div class="DrSmZ">
                <span class="EgzsJ">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    class=""
                    fill-rule="evenodd"
                  >
                    <path
                      class="rui-367TP"
                      d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"
                    ></path>
                  </svg>
                </span>
                <span>Sell</span>
              </div>
            </button>
          )}
        </div>
      </div>
      {/*        sub header  */}
      <div className="hnav fixed flex aic">
        <button className="view-cates flex aic color">
          <h2 className="s18 font ">All Categories</h2>
          <FontAwesomeIcon icon={faChevronDown} className="arro-down s24" />
        </button>
        {nav.map((item) => {
          return (
            <Link
              to={{
                pathname: "/category/" + item.label,
                state: {
                  category: item.label,
                },
              }}
              className="noul noulh bl color font s15 flex"
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="hclr" />
    </React.Fragment>
  );
}

export default Header;
