import { ThemeProvider } from 'styled-components';
import { theme } from './commons/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Booking from './pages/Booking';
import Map from './pages/Map';
import Contact from './pages/Contact';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/rezerwacja' component={Booking} />
          <Route exact path='/mapa' component={Map} />
          <Route exact path='/kontakt' component={Contact} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
