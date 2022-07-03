
import './styles/App.scss';
import ShoePage from './pages/ShoePage';
import Timer from './components/Timer';



function App() {

  return (

    <>
      <header >
        <h2> Shib👟 Shib👟 </h2>
        <Timer />

      </header>
      <div className="App">
        <ShoePage/>
      </div>
    </>
  );
}

export default App;