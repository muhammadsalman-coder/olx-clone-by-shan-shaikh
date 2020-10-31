import React, { useState, useEffect } from "react";
import "./post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faArrowLeft,
  faMobileAlt,
  faCar,
  faDesktop,
  faMotorcycle,
  faSuitcase,
  faCouch,
  faTshirt,
  faGuitar,
} from "@fortawesome/free-solid-svg-icons";

function Post() {
  return (
    <React.Fragment>
      <div className="page-container">
        <div className="post-nav ">
          <div className="nav-content flex">
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} className="icons aic icon-back s20" />
            </Link>
            <img src={require("../ui/logo.png")} alt="OLX Logo" className="aic" />
          </div>
        </div>
        <div className="post-body">
          <h2 className="s30 fontb textc">Post your ad</h2>

          <div className="post-container">
            <div>
              <h3 className="heading fontuc fontb color s16">
                <span>Choose a category</span>
              </h3>
              <div className="list-container ">
                <ul>
                  <Link
                    to={{
                      pathname: "/post/postyourad",
                      state: {
                        category: "mobiles",
                      },
                    }}
                    className="noul noulnh"
                  >
                    <li className="flex s16 ">
                      <div className="icno-div">
                        <FontAwesomeIcon icon={faMobileAlt} className="icons s24 aic" />
                      </div>
                      <span className="noul color aic">Mobiles</span>
                    </li>
                  </Link>

                  <Link
                    to={{
                      pathname: "/post/postyourad",
                      state: {
                        category: "vehicles",
                      },
                    }}
                    className="noul noulnh"
                  >
                    <li className="flex s16">
                      <div className="icno-div">
                        <FontAwesomeIcon icon={faCar} className="icons s24 aic" />
                      </div>
                      <span className="aic">Vehicles</span>
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/post/postyourad",
                      state: {
                        category: "electronics",
                      },
                    }}
                    className="noul noulnh"
                  >
                    <li className="flex s16">
                      <div className="icno-div">
                        <FontAwesomeIcon icon={faDesktop} className="icons s24 aic" />
                      </div>
                      <span className="aic">Electronics & Home Appliances</span>
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/post/postyourad",
                      state: {
                        category: "bikes",
                      },
                    }}
                    className="noul noulnh"
                  >
                    <li className="flex s16">
                      <div className="icno-div">
                        <FontAwesomeIcon icon={faMotorcycle} className="icons s24 aic" />
                      </div>
                      <span className="aic">Bikes</span>
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/post/postyourad",
                      state: {
                        category: "jobs",
                      },
                    }}
                    className="noul noulnh"
                  >
                    <li className="flex s16">
                      <div className="icno-div">
                        <FontAwesomeIcon icon={faSuitcase} className="icons s24 aic" />
                      </div>
                      <span className="aic">Jobs</span>
                    </li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/post/postyourad",
                      state: {
                        category: "furniture",
                      },
                    }}
                    className="noul noulnh"
                  >
                    <li className="flex s16">
                      <div className="icno-div">
                        <FontAwesomeIcon icon={faCouch} className="icons s24 aic" />
                      </div>
                      <span className="aic">Furniture & Home Decor</span>
                    </li>
                  </Link>

                  <Link
                    to={{
                      pathname: "/post/postyourad",
                      state: {
                        category: "fashion",
                      },
                    }}
                    className="noul noulnh"
                  >
                    <li className="flex s16">
                      <div className="icno-div">
                        <FontAwesomeIcon icon={faTshirt} className="icons s24 aic" />
                      </div>
                      <span className="aic">Fashion & Beauty</span>
                    </li>
                  </Link>

                  <Link
                    to={{
                      pathname: "/post/postyourad",
                      state: {
                        category: "others",
                      },
                    }}
                    className="noul noulnh"
                  >
                    <li className="flex s16">
                      <div className="icno-div">
                        <FontAwesomeIcon icon={faGuitar} className="icons s24 aic" />
                      </div>
                      <span className="aic">Books, Sports & Hobbies</span>
                    </li>
                  </Link>
                </ul>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="post-Footer flex">
          <h2 className="cfff font s14 ">Other Countries India - South Africa - Indonesia</h2>
          <h2 className="r cfff font s14 ">Free Classifieds in Pakistan. © 2006-2020 OLX</h2>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Post;

{
  /* <table className="post-ad-table color">
          <thead>
            <th className="fontuc">Choose a category</th>
            <th className="table-col-2"></th>
          </thead>
          <tbody>
            <tr>
              <td>
                <FontAwesomeIcon icon={faMobileAlt} className="icons s24" />
                <span>Mobiles</span>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCar} className="icons s24" />
                <span>Vehicles</span>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faDesktop} className="icons s24" />
                <span>Electronics & Home Appliances</span>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faMotorcycle} className="icons s24" />
                <span>Bikes</span>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faSuitcase} className="icons s24" />
                <span>Jobs</span>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCouch} className="icons s24" />
                <span>Furniture & Home Decor</span>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faTshirt} className="icons s24" />
                <span>Fashion & Beauty</span>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faGuitar} className="icons s24" />
                <span>Books, Sports & Hobbies</span>
              </td>
            </tr>
          </tbody>
        </table> */
}
