import React, { useEffect, useState } from "react";
import AdItem from "./AdItem";
import { Link } from "react-router-dom";
import { fireDb } from "../firebase";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CategoryPage(props) {
  // console.log("home props", props);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [prodata, setProdata] = useState({});
  const [totalproductsdata, setTotalproductsdata] = useState({});

  var categori = props.location.state.category;
  const [categoryItems, setcategoryItems] = useState();
  useEffect(() => {
    if (categori === "Mobile-Phones") {
      setcategoryItems("mobiles");
    } else if (categori === "Cars") {
      setcategoryItems("vehicles");
    } else if (categori === "Motorcycles") {
      setcategoryItems("bikes");
    } else if (categori === "Furniture") {
      setcategoryItems("furniture");
    } else if (categori === "TV-Video-Audio") {
      setcategoryItems("electronics");
    } else if (categori === "Fashion") {
      setcategoryItems("fashion");
    } else if (categori === "Jobs") {
      setcategoryItems("jobs");
    }
  }, []);

  console.log("12341414", categoryItems);
  // .ref("products/").child().
  // .on("value", (data) => {
  //   var keyss = Object.key;
  //   console.log("database Data", data.val());
  //   console.log("keyss Data", keyss);
  // });
  var count = 0;
  var _list = [];
  // console.log("list 1231 list  =>", list);

  // useEffect(() => {
  //   if (!loading) {
  //     for (let i = 0; i < 20; i++) {
  //       _list.push(<AdItem placeholder={true} key={count} />);
  //       setList(_list);
  //     }
  //   } else {
  //     _list.push(<AdItem placeholder={true} data={totalproductsdata} />);
  //     setList(_list);
  //   }
  // }, [totalproductsdata]);

  useEffect(() => {
    if (
      categoryItems === "mobiles" ||
      categoryItems === "vehicles" ||
      categoryItems === "bikes" ||
      categoryItems === "furniture" ||
      categoryItems === "electronics" ||
      categoryItems === "fashion" ||
      categoryItems === "jobs"
    ) {
      console.log("items==>", categoryItems);
      fireDb
        .database()
        .ref(`products/${categoryItems}`)
        .on("value", (snapshoot) => {
          // var deta = Object.entries(data.val());

          var deta = snapshoot.val();
          console.log("data for category=>", deta);
          var firestarr = Object.values(deta);
          var lengthss = firestarr.length;
          console.log("lengtsss=>", lengthss);
          console.log("lengtsss data =>", firestarr);

          firestarr.forEach((value, index) => {
            console.log("map values ", value);
            if (loading) {
              _list.push(<AdItem placeholder={true} key={count} data={value} />);
              setList(_list);
            }
          });

          // firestarr.map((values, index) => {
          //   console.log("i m in map ", values);
          // });
          // var abcd = firestarr[1];
          // var dataLength = firestarr.length;
          // console.log("length of data ", dataLength);
          console.log("data for category keysss=>", firestarr);

          // for (let i = 0; i < firestarr; i++) {
          //   const element = deta[i][1];
          //   // if (element) {
          //   //   setLoading(true);
          //   // }
          //   // console.log("eleement =>>", element);
          //   count++;
          //   setTotalproducts(count);
          //   if (loading) {
          //     _list.push(<AdItem placeholder={true} key={count} data={element} />);
          //     setList(_list);
          //   }
          // }
        });
    }
  }, [categoryItems]);

  return (
    <React.Fragment>
      <div className="post-nav ">
        <div className="nav-content flex">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="icons aic icon-back s20" />
          </Link>
          <img src={require("../ui/logo.png")} alt="OLX Logo" className="aic" />
        </div>
      </div>
      <div className="home-page">
        <div className="category-head-title s24 fontb"> All {categoryItems} Ads</div>
        <div className="ad-list flex">{list}</div>
        <button className="load-more fontb c333 s20 anim">Load More</button>
      </div>
      <div className="app-ribbon flex aic">
        <div className="img">
          <img className="bl" src="//statics.olx.com.pk/external/base/img/phone-app.png" />
        </div>
        <div className="meta">
          <h2 className="title fontb s30 color">Try the OLX App</h2>
          <h2 className="slogan fontb s18 color">
            Buy, sell and find just about anything using the app on your mobile.
          </h2>
        </div>
        <div className="links">
          <h2 className="title fontb s18 color">Get your App Today</h2>
          <div className="flex as">
            <a href="#" className="noul bl">
              <img src="//statics.olx.com.pk/external/base/img/appstore_2x.png" />
            </a>
            <a href="#" className="noul bl">
              <img src="//statics.olx.com.pk/external/base/img/playstore_2x.png" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CategoryPage;
