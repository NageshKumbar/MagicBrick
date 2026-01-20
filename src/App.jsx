import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header> <Navbar /> </header>
      <main> <Outlet /> </main>
      <footer> <Footer /> </footer>
    </div>
  );
};

export default App;