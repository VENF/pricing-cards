import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ThemeContext from './Context/Theme';
/*Views*/
import Pricing from './Views/Pricing';
import Success from './Views/Success';
import Cancel from './Views/Cancel';
/*Views*/

function App() {
  return (
    <ThemeContext>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Pricing}/>
            <Route path="/success" exact component={Success}/>
            <Route path="/cancel" exact component={Cancel}/>
          </Switch>
        </div>
    </ThemeContext>
  );
}

export default App;
