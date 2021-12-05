// import logo from './logo.svg';
import './App.css';
import firebase from './Utils/firebaseConfig';
// require('dotenv').config();

function App() {

  return (
    <div>
      {console.log('truc', process.env)}
      <h1>React & Firebase</h1>
      <h2>Test fb</h2>
      {process.env.REACT_APP_TITLE}
      {process.env.REACT_APP_DESCRIPTION}

      <code>
        <pre>{JSON.stringify(firebase.options, null, 2)}</pre>
      </code>
    </div>
  );
}

export default App;
