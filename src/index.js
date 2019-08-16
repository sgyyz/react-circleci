import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import JSEMOJI from 'emoji-js';

// new instance
const jsemoji = new JSEMOJI();
// set the style to emojione (default - apple)
jsemoji.img_set = 'apple';
// set the storage location for all emojis
jsemoji.img_sets.apple.path =
  'https://github.com/iamcal/emoji-data/tree/19299c91bc87374118f06b2760f1ced69d714ab1/img-apple-64/';

ReactDOM.render(<App jsemoji={jsemoji} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
