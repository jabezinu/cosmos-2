import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50">
      <Navbar />
      <Home />
    </div>
  )
}