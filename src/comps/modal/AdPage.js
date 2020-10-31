import React, { useState, useEffect } from "react";
import "./adpage.css";
import Header from "../Header";
import bannerx from "../../ui/bannerx.jpg";
import Footer from "../Footer";
import staticmap from "../../ui/staticmap.png";
function AdPAge(props) {
  const [productsData, setproductsData] = useState({});
  useEffect(() => {
    setproductsData(props.location.state.category);
  }, []);

  console.log("iin product data state ", productsData);
  return (
    <>
      <Header />
      <div>
        <div className="container-x flex">
          <div className="banner-postpage-container aic">
            <img src={bannerx} />
          </div>
        </div>
        <div className="row-1">
          <div className="left-col">
            <div className="a1 myborder">
              <img src={productsData.photoURL} />
            </div>
            <div className="b1 myborder">
              <div className="detail-div">
                <p className="fontb s20 color">Details</p>
              </div>
              <div className="description-div">
                <p className="fontb s20 color phead">Description</p>
                <p className="fontl s14 color mb20 descrip-text">{productsData.description}</p>
              </div>
            </div>
          </div>
          <div className="right-col">
            <div className="a2 myborder mb20">
              <div className="price-box">
                <p className="fontb color s30 rs-head-p">
                  <span>Rs:</span>
                  {productsData.price}
                </p>
                <p className="rs-head-p2 color fontl s14 ">{productsData.title}</p>
                <p className="rs-head-p3 color fontl s12 ">
                  <span className="leftone">Pakistan</span>
                  <span className="rightone">{productsData.date}</span>
                </p>
              </div>
            </div>
            <div className="b2 myborder mb20">
              <div className="userDetails">
                <p className="fontb color s22 rs-head-p">Seller Decription</p>
                <p className="rs-head-p2 color fontl s14 ">
                  <span> Phone: </span>
                  {productsData.phone}
                </p>
              </div>
            </div>

            <div className="c2 myborder">
              <div className="userDetails">
                <p className="fontb color s22 rs-head-p">Posted in</p>
                <div className="img-cell">
                  <img src={staticmap} width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdPAge;
