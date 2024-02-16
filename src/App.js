import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProfile from "./components/UserProfile";
import RepositoryList from "./components/RepositoryList";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/user/:username" exact element={<UserProfile />} />
          <Route path="/user/:username/repositories" exact element={<RepositoryList />} />
        </Routes>
      </Router>
  );
}

export default App;
