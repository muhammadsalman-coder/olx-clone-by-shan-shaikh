import React, { useEffect, useState } from "react";
// import { Simulate } from "react-dom/test-utils";
// import PostAdForm from "./PostAdForm";
import AdItem from "./AdItem";
import { fireDb } from "../firebase";

function HomePage(props) {
  // console.log("home props", props);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prodata, setProdata] = useState({});
  const [totalproducts, setTotalproducts] = useState(0);

  // .ref("products/").child().
  // .on("value", (data) => {
  //   var keyss = Object.key;
  //   console.log("database Data", data.val());
  //   console.log("keyss Data", keyss);
  // });
  var count = 0;
  var _list = [];
  console.log("list my list =>", list);
  useEffect(
    () => {
      if (!loading) {
        for (let i = 0; i < 20; i++) {
          _list.push(<AdItem placeholder={true} key={count} />);
          setList(_list);
        }
      }
      fireDb
        .database()
        .ref("products")
        .on("child_added", (snapshoot) => {
          var deta = Object.entries(snapshoot.val());
          var firestarr = deta.length;

          for (let i = 0; i < firestarr; i++) {
            const element = deta[i][1];
            // if (element) {
            //   setLoading(true);
            // }
            // console.log("eleement =>>", element);
            count++;
            setTotalproducts(count);
            if (loading) {
              _list.push(<AdItem placeholder={true} key={count} data={element} />);
              setList(_list);
            }
          }
        });
    },
    [],
    list,
    totalproducts
  );

  return (
    <React.Fragment>
      <div className="home-page">
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

export default HomePage;
