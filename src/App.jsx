import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Appointments from './pages/Appointments';
import AppointmentsDetails from './pages/AppointmentsDetails';
import AppointmentsAdd from './pages/AppointmentsAdd';
import Navar from './components/Navar';

function App() {
  return (
    <>
    <Navar></Navar>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/appointments" element={<Appointments />}></Route>
        <Route path="/appointment/:appointmentId" element={<AppointmentsDetails />}></Route>
        <Route path="/appointment/add" element={<AppointmentsAdd />}></Route>
      </Routes>
    </>
    
  );
}

export default App;
