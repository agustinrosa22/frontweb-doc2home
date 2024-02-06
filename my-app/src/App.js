import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/navBar';
import Sidebar from './components/SideBar/sideBar';
import Home from './views/Home/home';
import Landing from './views/Landing/Landing';
import { Routes,Route, useLocation } from 'react-router-dom';  

function App() {
  const location = useLocation();
  const showNavbarAndSidebar = location.pathname !== '/';

  return (
    <div className="app-container">
      {showNavbarAndSidebar && <Navbar />}
      <div className="content-container">
        {showNavbarAndSidebar && <Sidebar />}
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
