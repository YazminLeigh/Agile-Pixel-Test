import './App.css';
import backgroundImage from "./images/CFS_Paloma_Infinity_Shot_04_0776-edit 2.jpg"
import TitleComponent from './Components/title/title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div className="background-image-container">
          <img src={backgroundImage} alt="Paloma" className="background-image" />
          <div className="title" >
            <TitleComponent />
          </div>
        </div>
      </body>
    </div>

  );
}

export default App;
