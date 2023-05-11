import "./Home.css";
import Navbar from "../Navbar/Navbar";
import imgURL from "./hello.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main-center">
          <div className="welcome">Welcome to my Blog!</div>
          <img className="home-img" src={imgURL} alt="hello" />
        </div>
      </div>
    </>
  );
}

export default Home;
