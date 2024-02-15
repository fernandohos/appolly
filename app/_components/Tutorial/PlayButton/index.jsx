import styles from "./styles.module.css";

export function PlayButton({ isVideoPlaying, ...rest }) {
  return (
    <button
      type="button"
      {...rest}
      className={`${styles.playButton} ${
        isVideoPlaying ? styles.playButtonPlaying : styles.playButtonPaused
      }`}
    >
      <span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 28 27"
          >
            <path
              className={isVideoPlaying ? styles.opacity0 : styles.opacity1}
              fill="url(#paint0_linear_700_1139)"
              d="M24 11.768c1.333.77 1.333 2.694 0 3.464L8.25 24.325c-1.333.77-3-.192-3-1.732V4.407c0-1.54 1.667-2.502 3-1.732L24 11.768z"
            ></path>
            <path
              className={isVideoPlaying ? styles.opacity1 : styles.opacity0}
              fill="url(#paint1_linear_700_1139)"
              d="M6 5.656a2.656 2.656 0 115.313 0v15.938a2.656 2.656 0 11-5.313 0V5.656z"
            ></path>
            <path
              className={isVideoPlaying ? styles.opacity1 : styles.opacity0}
              fill="url(#paint2_linear_700_1139)"
              d="M17.688 5.656a2.656 2.656 0 115.312 0v15.938a2.656 2.656 0 11-5.313 0V5.656z"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_700_1139"
                x1="5.25"
                x2="27.293"
                y1="2.404"
                y2="22.02"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F70"></stop>
                <stop offset="1" stopColor="#FF0059"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_700_1139"
                x1="5.25"
                x2="27.293"
                y1="2.404"
                y2="22.02"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F70"></stop>
                <stop offset="1" stopColor="#FF0059"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_700_1139"
                x1="5.25"
                x2="27.293"
                y1="2.404"
                y2="22.02"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F70"></stop>
                <stop offset="1" stopColor="#FF0059"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </span>
    </button>
  );
}
