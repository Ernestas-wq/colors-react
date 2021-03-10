import ColorGenerator from './ColorGenerator';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SavedColors from './SavedColors';
import SingleSavedColor from './SavedColors/SingleSavedColor';
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
            <Route path="/saved-colors/:id" children={<SingleSavedColor />}></Route>
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
