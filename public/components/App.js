import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Dashboard, Info } from './pages';

const App = () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/info/:address" component={Info} />
    </div>
)

export default App;