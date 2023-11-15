import { useState } from "react";
import "./index.css";

const Slider = () => {
  const [src, setSrc] = useState(
    "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
  );

  const handleSource = (e) => {
    setSrc(e.target.src);
  };

  return (
    <div className="slider">
      <div className="main-img">
        <img src={src} />
      </div>
      <div className="images">
        <div className="image">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt=""
            onClick={(e) => handleSource(e)}
          />
        </div>
        <div className="image">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            onClick={(e) => handleSource(e)}
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt=""
            onClick={(e) => handleSource(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
