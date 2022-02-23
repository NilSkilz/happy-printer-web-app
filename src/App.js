
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Screens/Home';
import { Button } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
