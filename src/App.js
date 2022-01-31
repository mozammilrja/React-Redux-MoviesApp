import "./App.css";
import List from './components/List'
import Products from "./components/Products";
import { Route,Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import NProgress from 'nprogress';
function App() {
  // NProgress.configure({ showSpinner: false });

  // Route.events.on('routeChangeStart', () => {
  //   NProgress.start();
  // });

  // Route.events.on('routeChangeComplete', () => {
  //   NProgress.done();
  // });
  return (
    <div >
      <Nav />
      {/* <List/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="movies" element={<List/>} />
        <Route path="products" element={<Products/>} />
        <Route path="about" element={<About/>} />
      </Routes>

    </div>
  );
}

export default App;
