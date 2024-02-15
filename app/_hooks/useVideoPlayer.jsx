import { useState, useRef } from "react";

export function useVideoPlayer() {
  const videoRef = useRef();
  const progressBarRef = useRef();
  const [progress, setProgress] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  function togglePlayPause() {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  }

  function handleTimeUpdate(event) {
    const video = event.target;
    const newProgress = (video.currentTime / video.duration) * 100;
    if (progressBarRef) progressBarRef.current.style.width = newProgress + "%";
    setProgress(newProgress);
  }

  function handleProgressBarClick(event) {
    const progressBar = event.currentTarget;
    const position =
      (event.pageX - progressBar.getBoundingClientRect().left) /
      progressBar.offsetWidth;
    videoRef.current.currentTime = position * videoRef.current.duration;
  }

  return {
    videoRef,
    progressBarRef,
    progress,
    togglePlayPause,
    handleTimeUpdate,
    handleProgressBarClick,
    isVideoPlaying
  };
}
