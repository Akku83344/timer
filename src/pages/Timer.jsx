import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { BsSkipEnd } from "react-icons/bs";
import { PiClockCounterClockwiseBold } from "react-icons/pi";

const renderTime = ({ remainingTime }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  return (
    <div className="timer">
      <div className="value">{formatTime(remainingTime)}</div>
    </div>
  );
};

const Timer = () => {
  const [key, setKey] = useState(0);
  const [duration, setDuration] = useState(60);

  const handleAddTime = () => {
    setDuration((prevDuration) => prevDuration + 10);
  };

  const handleSkip = () => {
    setKey((prevKey) => prevKey + 1);
    setDuration(60);
  };

  return (
    <div className="timerWrapper">
      <div className="timerWrapper1">
        <div className="center-container">
          <h3 className="timer_head">Routine starting in...</h3>
          <p className="timer_subhead">subheading here</p>
        </div>
        <div className="timer-wrapper">
          <CountdownCircleTimer
            key={key} // Update the key to force a re-render and reset the timer
            isPlaying
            duration={duration}
            colors={["#6c3e77", 60]}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        <div className="button-wrapper">
          <button onClick={handleAddTime}>+ 10 sec</button>
          <button onClick={handleSkip}>
            <BsSkipEnd />
            Skip
          </button>
        </div>
      </div>

      <div className="box-violet">
        <h2 className="boxTitle">
          Step 2<span>/3</span>
        </h2>
        <div className="boxBottom">
          <div className="column1">
            <img src="img.png" alt="image" width={80}></img>
          </div>
          <div className="column2">
            <h3 className="column2_head">Cleansing</h3>
            <div className="subRow">
              <div className="subRow1">
                <PiClockCounterClockwiseBold className="time_icon"/>
                60 sec
              </div>
              <div className="vio">How to do</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;