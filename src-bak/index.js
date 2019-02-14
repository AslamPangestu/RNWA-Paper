import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as PaperProvider } from "react-native-paper";
import * as serviceWorker from './serviceWorker';

export default function Main() {
    return (
      <PaperProvider>
        <App />
      </PaperProvider>
    );
  }

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
