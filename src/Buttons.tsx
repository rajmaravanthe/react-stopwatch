import "./buttons.css";
import { ButtonsInterface } from "./interfaces";

const Buttons: React.FC<ButtonsInterface> = ({
  startTimer,
  stopTimer,
  resetTimer,
  disableReset,
  disableStart,
  disableStop,
}) => {
  return (
    <div className='button'>
      <button className='start' onClick={startTimer} disabled={disableStart}>
        Start
      </button>
      <button className='stop' onClick={stopTimer} disabled={disableStop}>
        Stop
      </button>
      <button className='reset' onClick={resetTimer} disabled={disableReset}>
        Reset
      </button>
    </div>
  );
};

export default Buttons;
