import "./App.css";
import Header from "./features/general/components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
