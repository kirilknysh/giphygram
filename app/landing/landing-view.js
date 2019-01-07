import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import 'common/styles/reset.styl';
import './landing-styles.styl';

import LandingApp from './components/LandingApp';

import store from './landing-store';

render((
    <Provider store={store}>
        <LandingApp />
    </Provider>
), document.body);
