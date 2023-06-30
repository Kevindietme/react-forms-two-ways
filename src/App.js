
import './App.css';
import ControlledComponents from './components /ControlledComponts';
import FormSubmit from './components /FormSubmit';

function App() {
  return (
<div className='App'>
<header className='App-header'>
  <h1>Forms in React</h1>
      <p>There are many ways to deal with forms in React. Here are a few common ones.
      </p>
    <ControlledComponents />
    <FormSubmit />
  </header>
</div>
  );
}

export default App;
