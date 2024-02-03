import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/navBar';
import Sidebar from './components/SideBar/sideBar';
import Home from './views/Home/home';

function App() {
  return (
    <div className="app-container">
    <Navbar />
    <div className="content-container">
      <Sidebar />
      <div className="main-content">
        <Home />
      </div>
    </div>
  </div>
  );
}

export default App;
