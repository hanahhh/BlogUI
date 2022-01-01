import './App.css';
import Navbar from './component/navbar/Navbar.jsx'
import Feature from './component/feature/Feature.jsx'
import Body from './component/body/Body.jsx'
import Ribon from './component/ribon/Ribon.jsx'
import Footer from './component/footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Feature/>
      <Body/>
      <Ribon/>
      <Footer/>
    </div>
  );
}

export default App;
