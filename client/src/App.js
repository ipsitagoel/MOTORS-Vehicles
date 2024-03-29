import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import Vehicles from './components/Vehicles/Vehicles'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
      <div>
      <Router>
        <NavBar />
        <Switch>
        <Route path='/vehicles'>
            <Vehicles />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
