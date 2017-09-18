// eslint-disable-next-line
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from  './reducers'
import promise from 'redux-promise';
import LandingPage from './components/landing_page'
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show'
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div id="app">
              <Switch>
                  <Route path="/posts/new" component={PostsNew} />
                  <Route path="/posts/:id" component={PostsShow} />

                  <Route path="/posts" component={PostsIndex}/>
                  <Route path="/" component={LandingPage}/>
              </Switch>
      </div>
    </BrowserRouter>
</Provider>
  , document.getElementById('root')
);

// registerServiceWorker();
