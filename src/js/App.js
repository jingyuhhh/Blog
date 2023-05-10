import "../css/App.css";
import Navbar from "./Navbar.js";
import Aboutme from "./Aboutme.js";
import Comments from "./Comments";
import Passages from "./Passages.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Aboutme />
        <Passages />
        <Comments />
      </div>
    </div>
  );
}

export default App;
