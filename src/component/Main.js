import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Creation from './Creation';
import Gallery from './Gallery';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/creation" component={Creation}/>
            <Route exact path="/gallery" component={Gallery}/>
        </Switch>
    );
};

export default Main;