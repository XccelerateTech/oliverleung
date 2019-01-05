import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import LinkList from './components/LinkList';
import {store} from './store'

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Who's in Space?</h2>
      <LinkList />
    </div>
  </Provider>
);
  
render(<App />, document.getElementById("root"));

export default App;


