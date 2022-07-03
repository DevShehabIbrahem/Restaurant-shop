import React, { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import "../../css/videoSection/VideoSection.css";
import shape from "../../Asset/VideoPlayerShape.png";
import { BsPlayFill } from "react-icons/bs";

const VideoSection = () => {
  const [isOpen, setIsopen] = useState(false);

  const Toggle = () => {
    setIsopen(!isOpen);
  };

  const closeModal = () => {
    setIsopen(false);
  };

  return (
    <>
      <div className="cover-section">
        <div className="content">
          <div className="shape">
            <img src={shape} alt="shape" />
            <div className="price">
              <span className="text-[#836c34] capitalize text-[30px] font-bold">
                burger
              </span>
              <h1 className="font-bold text-[40px]">$45</h1>
              <div className="icon">
                <button onClick={Toggle}>
                  <BsPlayFill />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Video Content Modal */}
        {isOpen && (
          <>
            <VideoModal isOpen={isOpen} closeModal={closeModal} />
          </>
        )}
      </div>
    </>
  );
};

export default VideoSection;
