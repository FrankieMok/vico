import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowToOrder from "./pages/HowToOrder";
import Products from "./pages/Products";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";

//const About = React.lazy(() => import("./pages/About"));
//const Contact = React.lazy(() => import("./pages/Contact"));
//const HowToOrder = React.lazy(() => import("./pages/HowToOrder"));
//const Products = React.lazy(() => import("./pages/Products"));
//const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
//const Error = React.lazy(() => import("./pages/Error"));
//const Admin = React.lazy(() => import("./pages/Admin"));

//const loading = <div></div>;

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/how-to-order/" component={HowToOrder} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/admin" component={Admin} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
