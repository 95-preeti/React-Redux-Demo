import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakesContainer from './components/HooksCakesContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ItemContainer cake />
      <ItemContainer/>
      <HooksCakesContainer/>
      <CakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
