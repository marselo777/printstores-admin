import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Routes } from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
