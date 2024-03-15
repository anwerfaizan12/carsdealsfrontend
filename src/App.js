import './App.css';
import Login from './components/Login';
import Register from './components/register';
import {BrowserRouter as Router,Route , Routes} from 'react-router-dom';  
import Cars from './components/Cars';
import DealerDetails from './components/DealerDetails';
import Header from './components/Header';
import DealerSignup from './components/DealerSignup';
import Buy from './components/Buy';
import ChangePassword from './components/ChangePassword';
import { UserContextProvider } from './context/contextprovider';
import CreateCar from './components/CreateCar';
import CarDetails from './components/CarDetails';
import Logout from './components/Logout';

function App() {
  return (
    <div>
    <UserContextProvider>
    <Router>
    <Header/>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/createcar' element={<CreateCar/>}/>
    <Route path='/cars' element={<Cars/>}/>
    <Route path='/dealerdetails' element={<DealerDetails/>}/>
    <Route path='/dealersignup' element={<DealerSignup/>}/>
    <Route path='/buy/:id' element={<Buy/>}/>
    <Route path='/changepassword' element={<ChangePassword/>}/>
    <Route path='/cardetails/:id' element={<CarDetails/>}/>
    <Route path='/logout' element={<Logout/>}/>
    </Routes>
    </Router>
    </UserContextProvider>
    </div>
  );
}

export default App;
