import React from 'react';
import './styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipes" component={Recipes} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
