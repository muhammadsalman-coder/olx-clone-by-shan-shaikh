import React from "react";
import "./postad.css";

function ProfileContainer(props) {
  console.log("in profile container =>", props);
  return (
    <div className="profile-container">
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
            onChange={props.handleInputChange}
            value={props.values.phone}
            type="text"
            placeholder="enter phone no"
            name="phone"
            className="s20"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
