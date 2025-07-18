import "./App.css";
import Blog from "./blog";
import Header from "./Header";
import ShopSneakers from "./ShopSneakers";
import Tezenis from "./Tezenis";

function App() {
  return (
    <div className="bg-white">
      <Header></Header>
      <ShopSneakers></ShopSneakers>
      {/* <Tezenis></Tezenis> */}
      <Blog></Blog>
    </div>
  );
}

export default App;
