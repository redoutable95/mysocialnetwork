import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <Navbar />
          <div className="app-content">
            <Route path="/profile" component={Profile} />
            <Route path="/messages" component={Dialogs} />
          </div>{" "}
        </div>{" "}
      </div>
    </BrowserRouter>
  );
};

export default App;
