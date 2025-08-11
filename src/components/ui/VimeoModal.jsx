"use client";
import React from "react";

const VimeoModal = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <div className="vimeo-modal-overlay" onClick={onClose}>
      <div className="vimeo-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="vimeo-container">
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&controls=1&quality=1&speed=1&transparent=0&dnt=1`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
      <style jsx>{`
        .vimeo-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .vimeo-modal-content {
          position: relative;
          width: 90%;
          max-width: 1280px;
          aspect-ratio: 16/9;
        }

        .vimeo-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .close-button {
          position: absolute;
          top: -40px;
          right: -40px;
          background: none;
          border: none;
          color: white;
          font-size: 40px;
          cursor: pointer;
          padding: 10px;
          line-height: 1;
        }

        .close-button:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default VimeoModal;
