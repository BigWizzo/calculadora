import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <h1>Calculadora: Milestone Five</h1>
      <Display result="0" />
      <ButtonPanel />
    </>
  );
}

export default App;
