import "./App.css";
import Header from "./components/Layout/Header/Header";
import LocalSearch from "./components/Layout/LocalSearch/LocalSearch";
import CategorySearch from "./components/Layout/CategorySearch/CategorySearch";
import HostRecruit from "./components/Layout/HostRecruit/HostRecruit";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <LocalSearch />
        <CategorySearch />
        <HostRecruit />
      </main>
      <Footer />
    </>
  );
}

export default App;
