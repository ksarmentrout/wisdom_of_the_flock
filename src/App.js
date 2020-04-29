import React from 'react';
import { CONFIG } from './config.js';
import './App.css';
import Error from './Error'
import MainPage from './MainPage'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        tweets: [],
        loading: true,
        fetchError: false,
        errorMessage: null,
        tweetBatchCounter: 1,
    };
  }

  getTweet() {
      // This is called on pageload
      this.getRandomTweet()
  }

  handleErrors(error) {
      console.log(error);
      this.setState({
          loading: false,
          fetchError: true,
          errorMessage: error.message,
      });
  }

  getRandomTweet() {
      // This is separate so the button always fetches a random tweet

      // Fetch tweets in batches - only get more if there are none or if the counter has gone through all existing.
      if (this.state.tweets.length === 0 || this.state.tweetBatchCounter === this.state.tweets.length) {
          // Reset counter
          this.setState({tweetBatchCounter: 1});
          fetch(CONFIG.API_RAND_URL)
              .then(results => results.json())
              .then(all_tweets => this.setState({tweets: all_tweets}))
              .then(() => this.setState({loading: false}))
              .catch((error) => this.handleErrors(error));
      }
      else {
          // Increment the counter if it hasn't reached the end of the list.
          // This reduces GET requests and ensures no duplicates within the first batch size
          this.setState({tweetBatchCounter: this.state.tweetBatchCounter + 1});
      }
  }

  getTweetAndResetButton() {
      this.getRandomTweet();
      document.querySelector('#permalink_button').innerText = 'Copy Permalink';
  }

  componentDidMount() {
      this.getTweet()
  }

  render() {
      if (this.state.loading) {
          return null;
      }
      else if (this.state.fetchError) {
          return (
              <Error errorMsg={this.state.errorMessage}/>
          );
      }
      else {
          let first_tweet = this.state.tweets.slice(this.state.tweetBatchCounter - 1, this.state.tweetBatchCounter);
          let tweet_text = first_tweet.map(t => t.tweet_text);
          let permalink_slug = first_tweet.map(t => t.permalink_slug);
          return (
              <MainPage
                  tweet_text={tweet_text}
                  permalink_slug={permalink_slug}
                  buttonOnClick={() => this.getTweetAndResetButton()}
              />
          );
      }
  }
}

export default App;