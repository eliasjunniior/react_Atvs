
import './App.css';

function Profile() {
  return (
    <div>
      <h1>A lenda do vascao</h1>
    <img
      src="https://vasconoticias.com.br/wp-content/uploads/2020/08/ribamar.jpg"
      alt="RIBAMAR"
    />
      <p>RIBAGOL</p>
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
