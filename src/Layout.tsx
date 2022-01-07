import "./layout.css";
import { LayoutInterface } from "./interfaces";

const Layout: React.FC<LayoutInterface> = ({
  minutes,
  seconds,
  milliseconds,
}) => {
  return (
    <div className='layout'>
      <div className='timer'>{minutes}</div>:
      <div className='timer'>{seconds}</div>:
      <div className='timer'>{milliseconds}</div>
    </div>
  );
};

export default Layout;
