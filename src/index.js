import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
Amplify.configure(aws_exports);
