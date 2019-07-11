import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase'; 


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept();
}

WebFont.load({
    google: {
        families: ['Open Sans Condensed: 300', 'Raleway: 300', 'Playfair Display', 'sans-serif']
    }
});

serviceWorker.unregister();
