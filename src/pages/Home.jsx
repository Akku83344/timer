import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="app">
      <h1>Welcome to My App</h1>
      <div className="home-link">
      <Link to="/timer">Timer</Link>
      <Link to="/newsletter">News</Link>
      </div>
      
    </div>
  );
};
