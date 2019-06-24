import React from "react";
import SearchBar from "./SearchBar";
import IdiomList from "./IdiomList";
import Idiom from "./Idiom";
import { data } from '../data/data';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div style={content}>
      <Router>
        <Route exact={true} path="/" render={() => (
          <div>
            <SearchBar />
            <IdiomList />
          </div>
        )}/>
        { data &&
          <Route path="/i/:idiomId" render={({ match }) => (
            <Idiom
              idiom={data.find(i => i["id"] === match.params.idiomId )}
            />
          )}/> }
      </Router>
    </div>
  );
}

const content = {
  textAlign: 'center',
  margin: '40px'
}

export default App;
