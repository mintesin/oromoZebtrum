import "./App.css";

function App(data) {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <i> Identität stärken, Integration fördern, Akzeptanz schaffen -</i>
          <h1>Oromo Horn von Afrika Zentrum e.V.</h1>
          <h1>{data.name}</h1>
        </header>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default App;
