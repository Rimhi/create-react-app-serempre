import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import useConfig from "./config";
import useViews from "./views";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  // Config
  const { useStoreConfig, useInterceptor } = useConfig();
  const { store, persistor } = useStoreConfig();
  useInterceptor(store);

  // Views
  const { useScreens } = useViews();
  const { Home, About, Dashboard } = useScreens();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {/* Example */}
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </Router>
        {/* Example */}
      </PersistGate>
    </Provider>
  );
};

export default App;
