import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ThemeContext from './Context/Theme';
/*Views*/
import Pricing from './Views/Pricing';
/*Views*/

function App() {
  return (
    <ThemeContext>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Pricing}/>
          </Switch>
        </div>
    </ThemeContext>
  );
}

export default App;
