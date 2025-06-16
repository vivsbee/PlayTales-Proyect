import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Login } from './pages/Login.jsx';
import { Catalogue } from './pages/Catalogue.jsx';
import { Register } from './pages/Register.jsx';
import { NavBar } from './components/NavBar.jsx';
import { Footer } from './components/Footer.jsx';
import { GameDetails } from './pages/GameDetails.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { useAuth } from './context/UserContext.jsx';
import { useLocation } from 'react-router-dom';



function AppContent() {
  const { user } = useAuth();
  const location = useLocation();


  const hideLayout = location.pathname === "/login" || location.pathname === "/register";


  return (
    <div className='bg-deepwave min-h-screen'>
      <header className='z-10'>
        {!hideLayout && <NavBar />}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/gamedetails/:id" element={<GameDetails />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
