import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MyRoutes from "./routes/MyRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Hero /> */}
      <MyRoutes />
    </div>
  );
}

export default App;
