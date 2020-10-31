import React, { useState } from "react";
import { storage } from "../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function UploadImage(props) {
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
            setUrl(url);
          });
      }
    );
  };

  return (
    <div>
      <progress value={progress} max="100" />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>upload</button>
    </div>
  );
}

export default UploadImage;
