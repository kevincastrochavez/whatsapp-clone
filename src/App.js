import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <div className="app__body">
        {!user ? (
          <h1>Login</h1>
        ) : (
          <Router>
            <Sidebar />

            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
            </Switch>
          </Router>
        )}
      </div>
    </div>
  );
}

export default App;
