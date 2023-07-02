import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa';

interface Props {
  content?: string;
  width?: number;
}

const Resizer = (props: Props) => {
  if (props.width) {
    return (
      <div>
        {props.width < 769 ? (
          <div
            style={{ border: ' 2px solid green', padding: '2rem' }}
          >
            <FaMobileAlt />
          </div>
        ) : props.width < 992 ? (
          <div
            style={{ border: ' 2px solid yellow', padding: '2rem' }}
          >
            <FaTabletAlt />
          </div>
        ) : (
          <div style={{ border: ' 2px solid red', padding: '2rem' }}>
            <FaLaptop />
          </div>
        )}
      </div>
    );
  }

  return <div> No width provided </div>;
};

export default Resizer;
