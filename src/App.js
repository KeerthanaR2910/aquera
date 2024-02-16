import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProfile from "./components/UserProfile";
import RepositoryList from "./components/RepositoryList";
import SearchUser from "./components/SearchUser";

function App() {
    return (
        <div className="flex justify-center">
            <Router>
                <SearchUser/>
                <Routes>
                    <Route path="/user/:username" exact element={<UserProfile/>}/>
                    <Route path="/user/:username/repositories" exact element={<RepositoryList/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
