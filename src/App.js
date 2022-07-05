import './App.css';
import TitleComponent from './Components/title/title';
import NavComponent from './Components/nav/nav';
// import { useNav } from './Components/Hooks/useNav';

function App() {


  // const nav = useNav()

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div className="background-image-container">
          <div className="title" >
            <TitleComponent />
          </div>
          <div className="navBar-home-container">
            <NavComponent className="nav" />
          </div>
          </div>
          {/* <div className="navBar-contaoner">
            {nav.map((item, index) => {
              <NavComponent nav={item} key={index} /> 
            })
            }
          </div> */}
      </body>
    </div>

  );
}

export default App;
