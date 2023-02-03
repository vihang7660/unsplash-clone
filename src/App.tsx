import { useSelector } from "react-redux";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Wall from "./components/Wall";
import PhotosList from "./features/photos/PhotosList";

interface State {
  users: any;
}

const App: React.FC = () => {
  const { query } = useSelector((state: State) => state.users);
  function renderWall() {
    if (!query) {
      return <Wall />;
    }
  }

  return (
    <div className="App">
      <Header />
      <Navbar />
      {renderWall()}
      <PhotosList />
    </div>
  );
};

export default App;
