import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CONFIG } from './config.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
        tweets: []
    };
  }

  componentDidMount() {
    fetch(CONFIG.API_BASE_URL)
        .then(results => results.json())
        .then(tweets => this.setState({tweets: tweets}));
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <li key={index}>{tweet.tweet_text}</li>);

    return (
      <div>
          <h1>Tweet list</h1>
          <ul>
            {tweets}
          </ul>
      </div>
    );
  }
}

export default App;