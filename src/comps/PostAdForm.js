import React, { useState, useEffect } from "react";
import "./postad.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UploadImage from "./UploadImage";
import { Link } from "react-router-dom";
import { faArrowLeft, faCamera, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { fireDb, storage } from "../firebase";
import ProfileContainer from "./ProfileContainer";

var firebase = fireDb;
var firebaseref = firebase.database().ref();

const PostAdForm = React.memo((props) => {
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours

  var initialFieldValues = {
    title: " ",
    description: " ",
    price: "",
    phone: 0,
    photoURL: " ",
    key: "",
    date: "",
  };

  var [values, setvalues] = useState(initialFieldValues);

  console.log(values);

  const handleInputChange = (event) => {
    event.preventDefault();
    var { name, value } = event.target;
    setvalues({
      ...values,
      [name]: value,
      key: firebaseref.push().key,
      date: date + "/" + month + "/" + year + " " + hours,
    });
  };
  // useEffect(() => {

  // }, [input])
  var category = props.location.state.category;
  if (props.location.state !== undefined) category = props.location.state.category;
  console.log("category=>", category);
  const handleSubmit = () => {
    initialFieldValues = values;
    firebaseref.child(`/products/${category}/` + initialFieldValues.key).set(values);
    alert("ad post successfully");
  };

  //  firebase upload image methods start...

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  console.log("my props =>", props);
  console.log("image", image);
  console.log("url", url);
  console.log("progress", progress);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setvalues({
              ...values,
              photoURL: url,
            });
          });
      }
    );
  };

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

        <div className="post-body ">
          <h2 className="fontb s24 textc fontuc">Post Your Ad</h2>
          <div className="posting-container">
            <div className="posting-header">
              <span className="fontb fontuc s22">Selected category</span>
            </div>
            <div className="posting-body">
              <div>
                <div className="details form-group">
                  <h2 className="fontb s22 fontuc">include some details</h2>
                  <div className="form-title-div">
                    <label className="font color s14">Ad title</label>
                    <input
                      type="text"
                      name="title"
                      onChange={handleInputChange}
                      value={values.title}
                      className="ad-title"
                    />
                    <span className="s12 color">Mention the key features of your item (e.g. brand,model,age,type)</span>

                    <div className="form-group-description">
                      <label className="font color s14">Description</label>
                      <textarea
                        onChange={handleInputChange}
                        value={values.description}
                        className="descriptiion-input"
                        name="description"
                      />
                      <span className="s12 color">include condition, features and reason for selling</span>
                    </div>
                  </div>
                </div>
                <div className="set-price">
                  <div className="price-container">
                    <h2 className="fontb fontuc s22">set a price</h2>
                    <label className="font s14">Price</label>
                    <div className="input-rs-div">
                      <label className="rs-label">Rs</label>
                      <input value={values.price} type="number" name="price" onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
                <div className="upload-container">
                  <div className="upload-image">
                    <h2 className="fontb s22">Upload Image</h2>
                    <div className="upload-btn">
                      <div>
                        <progress value={progress} max="100" />
                        <input type="file" onChange={handleChange} />
                        <button onClick={handleUpload}>upload</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-container">
                  <div className="location">
                    <h2 className="fontb s22 fontuc">Confirm Your Locaiton</h2>
                    <label className="font color">Country</label>
                    <div className="country-in">
                      <span className="fontl s18"> Pakistan</span>
                    </div>
                  </div>
                </div>

                <ProfileContainer {...{ handleInputChange, values, initialFieldValues }} />
                {/* <div className="profile-container">
                  <div className="your-details">
                    <h2 className="fontb fontuc s22">Review Your Details</h2>
                    <div className="profile flex">
                      <img
                        width="50px"
                        height="50px"
                        src="https://img.pngio.com/no-avatar-png-transparent-png-download-for-free-3856300-trzcacak-png-avatar-920_954.png"
                      />

                      <div className="profile-div">
                        <label className="font color">name</label>
                        <div className="profile-name name-in">
                          <span className="fontl s18"> Abc name</span>
                        </div>
                      </div>
                    </div>
                    <div className="phone-container">
                      <label className="no-left s16 font color">Your Phone Number</label>
                      <input
                        onChange={handleInputChange}
                        value={values.price}
                        type="text"
                        placeholder="enter phone no"
                        name="phone"
                        className="s20"
                      />
                   
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="posting-footer">
              <button onClick={handleSubmit} className="fontb s18">
                Post Now
              </button>
            </div>
          </div>
        </div>
        {/* <button onClick={() => addOrEdit(values)}>edit</button> */}
        <div className="post-Footer flex">
          <h2 className="cfff font s14 ">Other Countries India - South Africa - Indonesia</h2>
          <h2 className="r cfff font s14 ">Free Classifieds in Pakistan. © 2006-2020 OLX</h2>
        </div>
      </div>
    </React.Fragment>
  );
});

export default PostAdForm;
