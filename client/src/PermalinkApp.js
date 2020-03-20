import React from 'react';
import './App.css';
import App from './App'
import { CONFIG } from './config.js';


class PermalinkApp extends App {
  getTweet() {
      // Overloads App.getTweet so that on pageload the specific permalink tweet is fetched
      console.log(this.props);
      let { params } = this.props.match;
      let endpoint = CONFIG.API_BASE_URL.concat(params.permalink);
      fetch(endpoint)
          .then(results => results.json())
          .then(all_tweets => this.setState({tweets: all_tweets}));
  }
}

export default PermalinkApp;
