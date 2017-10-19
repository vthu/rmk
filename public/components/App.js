import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Dashboard } from './pages';

const App = () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
    </div>
)

export default App;