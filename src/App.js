import React, { useState, createContext } from "react";
import { LandingPage } from "views";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Route path="/" component={LandingPage}/>
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
