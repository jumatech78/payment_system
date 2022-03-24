import "./App.css";
import Drawerbar from "./components/Drawerbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="drawer_section">
        <Drawerbar/>
        {/* <h2>Drawer Section</h2> */}
      </div>
      <div className="post_section">
        <Navbar/>
        {/* <h2>Post Section</h2> */}
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
