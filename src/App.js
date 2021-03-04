import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';
import { Meteo } from './components/Meteo/Meteo';




function App() {
  return (
      <div className="App">
      <Header />


        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/projets' exact>
            <Projects />
          </Route>
          <Route path='/projets/meteo' >
            <Meteo />
          </Route>
        </Switch>

        <Footer />
      </div>
  );
}

export default App;
