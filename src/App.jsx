import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Certifications from './pages/Certifications.jsx';
import Proyects from './pages/Proyects.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='/certifications' element={<Certifications/>}/>
          <Route path='/proyects' element={<Proyects/>}/>    
          <Route path='/contact' element={<Contact/>}/>   
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
