import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProfile from "./pages/UserProfile";
import Repositories from "./pages/Repositories";
import SearchUser from "./components/SearchUser";

function App() {
    return (
        <div className="flex items-center p-4 h-screen flex-col gap-10 w-full">
            <p className=' text-2xl font-bold'>GitHub Profile Viewer</p>
            <Router>
                <SearchUser/>
                 <div className='w-full md:max-w-[80%]'>
                <Routes>         
                    <Route path="/user/:username" exact element={<UserProfile/>}/>
                    <Route path="/user/:username/repositories" exact element={<Repositories/>}/>
                </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
