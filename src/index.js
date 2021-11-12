import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './index.css';
import Header from './header/header';
import Search from './search/search';
import Search2  from './search_v2/search_v2';
import Category from './category/category';
import Watch from './watch/watch';
import reportWebVitals from './reportWebVitals';
import Recently from './recently/recently';
import Genre from './genre/genre'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/genre/">
          <Header/>
          <Search/>
          <Genre/>
        </Route>
        <Route path="/search/">
          <Header/>
          <Search2/>
        </Route>
        <Route path="/watch/">
          <Header/>
          <Watch/>  
        </Route>
        <Route path="/category/">
          <Header/>
          <Category/>  
        </Route>
        <Route path="/">
          <Header/>
          <Search/>
          <Recently />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
