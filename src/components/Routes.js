import { BrowserRouter, Switch, Route } from 'react-router-dom';
import calculator from './App';
import home from './Home';
import quote from './Quote';
import error from './Error';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/calculator" component={calculator} />
      <Route exact path="/quote" component={quote} />
      <Route component={error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
