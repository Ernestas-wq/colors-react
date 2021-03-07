import ColorGenerator from './ColorGenerator';
import Sidebar from './Sidebar';
import SavedColors from './SavedColors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './staticComponents/Home';
import Heading from './staticComponents/Heading';
function App() {
  return (
    <>
      <Heading />
      <main className="main">
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/color-generator">
              <ColorGenerator />
            </Route>
            <Route path="/saved-colors">
              <SavedColors />
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
