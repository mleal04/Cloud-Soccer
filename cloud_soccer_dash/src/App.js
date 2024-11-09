import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Content from "./components/content";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
