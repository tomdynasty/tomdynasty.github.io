import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import './style.css';
import Store from './Redux/store';
import MaskMap from '../src/Container/MaskMap';

function App() {
  return (
    <Provider store={Store}>
      <MaskMap />
    </Provider>
  );
}

export default App;
