import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Creation from './Creation';
import Gallery from './Gallery';
import Cart from './Cart';

const Main = () => {
    return (
        <Switch>
            {/* switch component, routes element */}
            {/* exact (yang akan pertama ditampilkan) */}
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/creation" component={Creation}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/cart" component={Cart}/>
        </Switch>
    );
};

export default Main;