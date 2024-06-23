import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="text-white flex-grow">Body</div>
      <Footer />
    </div>
  );
}

export default App;
