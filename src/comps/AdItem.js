import React, { useState, useEffect } from "react";
import noimg from "../ui/noimg.png";
import { Link } from "react-router-dom";
import App from "../App";

function AdItem(props) {
  // if ("placeholder" in props) {

  const [temp, settemp] = useState(false);
  const [txtLength, settxtLength] = useState();

  setTimeout(() => {
    settemp(true);
  }, 1500);
  const [data, setdata] = useState();

  // return <App mydata={"main a gaya"} />;

  const MAX_LENGTH = 32;

  useEffect(() => {
    console.log("log ad item in props ", props.data);
    if (props.data !== undefined) {
      setdata(props.data);
      settxtLength(props.data.title.length);
    }
  }, []);

  if (props.placeholder) {
    if (temp) {
      return (
        <Link
          class="ad-link color"
          to={{
            pathname: "/adpage",
            state: {
              category: props.data,
            },
          }}
        >
          <div className="ad-item">
            {data.photoURL !== " " ? (
              <div className="poster placeholder flex">
                <img src={data.photoURL} height="160px" className="ads-img" />
              </div>
            ) : (
              <div className="poster placeholder flex">
                <img src={noimg} height="160px" className="ads-img" />
              </div>
            )}
            <div className="for-ads-border">
              {data.price ? (
                <div className="title placeholder">
                  <p className="fontb s18">Rs : {data.price}</p>
                </div>
              ) : (
                <div className="title anim placeholder" />
              )}
              {data.title ? (
                <div className="tagline placeholder">
                  {data.title.length < 32 ? (
                    <p className="font s14">{data.title.substring(0, MAX_LENGTH)}</p>
                  ) : (
                    <p className="font s14">{data.title.substring(0, MAX_LENGTH)}...</p>
                  )}
                </div>
              ) : (
                <div className="tagline anim placeholder" />
              )}
              <div className="ftr flex">
                {data.date ? (
                  <React.Fragment>
                    <div className="stamp placeholder"></div>
                    <div className="location  placeholder">{data.date}</div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className="stamp placeholder"></div>
                    <div className="location  placeholder">1 jan 2020</div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </Link>
      );
    } else {
      return (
        <div className="ad-item">
          <div className="poster anim placeholder" />
          <div className="title anim placeholder" />
          <div className="tagline anim placeholder" />
          <div className="ftr anim flex">
            <div className="anim stamp placeholder" />
            <div className="anim location  placeholder" />
          </div>
        </div>
      );
    }
  }

  return <div className="ad-item">error</div>;
}

export default AdItem;

// <div className="ad-item">
// {data.photoURL !== " " ? (
//   <div className="poster placeholder">
//     <img src={data.photoURL} height="160px" className="ads-img" />
//   </div>
// ) : (
//   <div className="poster placeholder">
//     <img src={noimg} height="160px" className="ads-img" />
//   </div>
// )}
// {data.price ? (
//   <div className="title placeholder">
//     <p className="fontb s18">Rs : {data.price}</p>
//   </div>
// ) : (
//   <div className="title anim placeholder" />
// )}
// {data.title ? (
//   <div className="tagline placeholder">
//     <p className="font s14">{data.title}</p>
//   </div>
// ) : (
//   <div className="tagline anim placeholder" />
// )}
// <div className="ftr anim flex">
//   {data.title ? (
//     <div className="stamp placeholder">1 jan 2020</div>
//   ) : (
//     ` <div className="anim stamp placeholder" />
// <div className="anim location  placeholder" />`
//   )}
// </div>
// </div>

{
  /* <div className="ad-item">
{props.data.photoURL !== " " ? (
  <div className="poster placeholder">
    <img src={props.data.photoURL} height="160px" className="ads-img" />
  </div>
) : (
  <div className="poster placeholder">
    <img src={noimg} height="160px" className="ads-img" />
  </div>
)}
{props.data.price ? (
  <div className="title placeholder">
    <p className="fontb s18">Rs : {props.data.price}</p>
  </div>
) : (
  <div className="title anim placeholder" />
)}
{props.data.title ? (
  <div className="tagline placeholder">
    <p className="font s14">{props.data.title}</p>
  </div>
) : (
  <div className="tagline anim placeholder" />
)}
<div className="ftr anim flex">
  {props.data.title ? (
    <div className="stamp placeholder">1 jan 2020</div>
  ) : (
    ` <div className="anim stamp placeholder" />
<div className="anim location  placeholder" />`
  )}
</div>
</div> */
}
