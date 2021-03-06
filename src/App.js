import React from 'react';
import './App.css';
import CreditCalculator from './CreditCalculator/CreditCalculator';
import Homepage from './Homepage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Menu, Button, MenuItem } from "@material-ui/core";

function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div id="routerMenu">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="primary" id="menuButton">
            ‎☰
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link to={process.env.PUBLIC_URL + "/home"}>Home</Link></MenuItem>
              <Link to={process.env.PUBLIC_URL + "/calculator"}><MenuItem onClick={handleClose}>Credit calculator</MenuItem></Link>
            </Menu>
          </div>
          <div>
            <Switch>
              <Route path={process.env.PUBLIC_URL + "/home"}>
                <Homepage />
              </Route>
              <Route path={process.env.PUBLIC_URL + "/calculator"}>
                <CreditCalculator />
              </Route>
              <Route path="/">
                <Redirect to={process.env.PUBLIC_URL + "/home"} />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
