// eslint-disable-next-line
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from  './reducers'
import promise from 'redux-promise';
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
</Provider>
  , document.getElementById('root')
);

// registerServiceWorker();
