import "./App.css";

import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Post from "./components/Profile/MyPosts/Post/Post";
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <Nav />
        <Profile />
      </div>
    </div>
  );
};

export default App;
