
import './App.css';

function Profile() {
  return (
    <div>
      <h1>O melhor do Mundo</h1>
    <img
      src="https://gazetadourubu.com/storage/media-items/image/2024/01/Vinicius-Junior-Anfield_20240127062652.jpg"
      alt="GOLAÇO"
    />
      <p>GOLAÇO</p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
    
    <Profile />
    <hr/>
    <Profile />
    <hr/>
    <Profile />
    <hr/>
    </div>
    
  );
  
}

export default App;
