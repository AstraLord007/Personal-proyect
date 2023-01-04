import Register from './components/pages/Register';
import Login from './components/pages/Login';
import AboutUs from './components/pages/AboutUs';
import Admin from './components/pages/Admin';
import Home from './components/pages/Home';
import LinkPage from './components/pages/LinkPage';
import Missing from './components/pages/Missing';
import Orders from './components/pages/Orders';
import Unauthorized from './components/pages/Unauthorized';
import Layout from './components/layout/Layout';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';


/*const ROLES = {
  'User': 2001,
  'Cook': 1984,
  'Admin': 5150
}*/


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="/" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        

        {/* we want to protect these routes */}
        <Route element={<RequireAuth />}>
          <Route path="home" element={<Home />} />
        
        
          <Route path="orders" element={<Orders />} />
        
        
          <Route path="admin" element={<Admin />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;