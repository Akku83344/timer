import { Route, Switch } from 'react-router-dom';
import NewsletterPage from "./newsletterpage"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <Switch>
          <Route path="/newsletter" component={NewsletterPage} />
          {/* <Route path="/timer" component={TimerPage} /> */}
        </Switch>
    </div>
  );
}

export default App;
