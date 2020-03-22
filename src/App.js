import React from 'react';
import { CONFIG } from './config.js';
import './App.css';
import MainPage from './MainPage'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        tweets: [],
        loading: true,
    };
  }

  getTweet() {
      // This is called on pageload
      this.getRandomTweet()
  }

  getRandomTweet() {
      // This is separate so the button always fetches a random tweet
      fetch(CONFIG.API_RAND_URL)
          .then(results => results.json())
          .then(all_tweets => this.setState({tweets: all_tweets}))
          .then(() => this.setState({loading: false}));
  }

  componentDidMount() {
      this.getTweet()
  }

  render() {
      if (this.state.loading) {
          return null;
      }
      else {
          let first_tweet = this.state.tweets.slice(0, 1);
          let tweet_text = first_tweet.map(t => t.tweet_text);
          let permalink_slug = first_tweet.map(t => t.permalink_slug);
          return (
              <MainPage
                  tweet_text={tweet_text}
                  permalink_slug={permalink_slug}
                  buttonOnClick={() => this.getRandomTweet()}
              />
          );
      }
  }
}

export default App;