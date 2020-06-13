import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {AppProvider} from 'components/AppContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
