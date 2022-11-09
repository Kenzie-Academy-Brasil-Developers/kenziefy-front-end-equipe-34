import React from "react";
import { ToastContainer } from "react-toastify";
import ContextsProvider from "./contexts/provider";
import RoutesMain from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ContextsProvider>
        <RoutesMain />
      </ContextsProvider>
    </div>
  );
}

export default App;
