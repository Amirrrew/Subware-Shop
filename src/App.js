import { useRoutes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import routes from './Routes';
import Footer from './Components/footer';

function App() {
  let Router = useRoutes(routes)
  return (
    <div>
      <Navbar />
      {Router}
      <Footer/>
    </div>
  )
}

export default App;
