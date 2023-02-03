import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Wall from "./components/Wall";
import PhotosList from "./features/photos/PhotosList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Wall />
      <PhotosList />
    </div>
  );
};

export default App;
