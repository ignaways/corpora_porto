import RoutesPage from "./routes/routes";
import Navbar from "./components/Navbar";


function App() {
  return (
    // bg-red-100
    <div className="container mx-auto px-4">
      <Navbar />
      
      <RoutesPage />
    </div>
  );
}

export default App;
