import React from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import "../../css/VideoModal/VideoModal.css";
import { Bounce } from "react-reveal";

const VideoModal = ({ closeModal, isOpen }) => {
  const opts = {
    height: "600px",
    width: "1000px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={true}
          ariaHideApp={false}
          className="flex items-center justify-center w-full h-screen"
          onRequestClose={closeModal}
        >
          <span className="close-modal" onClick={closeModal}>
            &times;
          </span>
          <Bounce top>
            <YouTube videoId="XqyEADY_20Y" opts={opts} className="w-full" />
          </Bounce>
        </Modal>
      )}
    </>
  );
};

export default VideoModal;
