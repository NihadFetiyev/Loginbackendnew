import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './home';
import Login from './loginPage';
import SignUp from './signUp';
import MainLayout from './MainLayout';
import Private from './Private';
import Profil from './profilPage';
import Admin from './AdminPsge';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<Private role={["user", "Admin"]} />} >
            <Route path="profil" element={<Profil />}></Route>
          </Route>
          <Route element={<Private role={["Admin"]} />} >
            <Route path="admin" element={<Admin />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
