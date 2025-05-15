import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';


function App() {

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", minHeight: '100vh' }}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
