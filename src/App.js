
import './App.css';

import Shoes from './components/Shoes';
import Timer from './components/Timer';



function App() {

  return (

    <>
      <header >
        <h2> Shib👟 Shib👟 </h2>
        <Timer />

      </header>
      <div className="App">
        <Shoes name="NIKE" size={34} price={"250"} imgSrc={"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c6f5524c-82f9-45d8-b9ff-9dec248dcc65/air-flight-lite-mid-shoe-tr22fR.png"} />
        <Shoes name="Adidas" size={36} price={"200"} imgSrc={"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Forum_Low_Shoes_White_FY7756_01_standard.jpg"} />
        <Shoes name="Crocs" size={30} price={"1"} imgSrc={"https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_0DA_ALT150/crocs"} />
        <Shoes name="FlipFlops" size={45} price={"999"} imgSrc={"https://www.pipo.co.il/images/products/og/532119/aab77ae114659d1ddbe5c679fd35a875_f8fbce8a-55bd-453a-aa6b-9f291da8b7c4.jpg"} />
        <Shoes name="Sandals" size={20} price={"1000"} imgSrc={"https://ae01.alicdn.com/kf/H0ae62f276634413bbb2fcf52a2e6ca41r/Summer-Old-Man-Wearing-Men-s-Soil-Leather-Beach-Shoes-Breathable-Mesh-Eyelids-Sandals-Baotou-Non.jpg"} />

      </div>
    </>
  );
}

export default App;