import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import CreateBlog from './CreateBlog';
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <main className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
          <Route path="/create">
            <CreateBlog />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
