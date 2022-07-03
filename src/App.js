
import './styles/App.scss';
import Timer from './components/Timer';
import { Link } from 'react-router-dom';
import AppRouter from './router/AppRouter';



function App() {

  return (
    <>
      <header >
        <h2> Shib👟 Shib👟 </h2>
          <Timer />
        <nav className='navBar'>
          <Link to={"/"} className='link'>Shop</Link>
          <Link to={"/employees"} className='link'>Employees</Link>
        </nav>

      </header>
      <div className="App">
        <AppRouter />
      </div>
    </>
  );
}

export default App;