import './App.css';
import useWindowSize from './hooks/useWindowSize';
import Resizer from './components/Resizer';
import useToggle from './hooks/useToggle';

function App() {
  const { width } = useWindowSize();
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      <div>{value?.toString()}</div>
      <button onClick={() => toggleValue(!value)}> Toggle </button>
      <button onClick={() => toggleValue(false)}>False</button>
      <button onClick={() => toggleValue(true)}>True</button>
      {value && <Resizer width={width} />}
    </div>
  );
}

export default App;
