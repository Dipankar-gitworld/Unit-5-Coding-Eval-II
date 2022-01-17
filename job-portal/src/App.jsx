import Home from './components/Home';
import './App.css';
import {Routes, Route} from "react-router-dom";
import ClientLogin from './components/ClientLogin';
import CompanyLogin from './components/CompanyLogin';
import CompanyDashboard from './components/Companydashboard';
import ClientDashboard from './components/ClientDashboard';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/client_login" element={<ClientLogin />}></Route>
        <Route path="/company_login" element={<CompanyLogin />}></Route>
        <Route path="/company_dashboard" element={<CompanyDashboard />}></Route>
        <Route path="/client_dashboard" element={<ClientDashboard />}></Route>
      </Routes>
      
        
    </div>
  );
}

export default App;
