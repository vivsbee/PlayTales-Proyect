import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Login } from './pages/Login.jsx';
import { Catalogue } from './pages/Catalogue.jsx';
import { Register } from './pages/Register.jsx';
import { NavBar } from './components/NavBar.jsx';
import { Footer } from './components/Footer.jsx';
// import { GameDetails } from './pages/GameDetails.jsx';
import { UserProvider } from './context/UserContext.jsx';

function App() {


  return (
    <>
      <UserProvider>
        <div className='bg-deepwave min-h-screen'>
          <header>
            <NavBar />
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            {/*<Route path="/gamedetails/:id" element={<GameDetails/>} />*/}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

          <Footer />
        </div>
      </UserProvider>
    </>
  )
}

export default App
