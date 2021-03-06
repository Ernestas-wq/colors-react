import ColorGenerator from './ColorGenerator';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './staticPages/Home';
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/color-generator">
            <ColorGenerator />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
