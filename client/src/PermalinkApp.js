import React from 'react';
import './App.css';
import App from './App'
import MainPage from './MainPage'
import Err404 from './Err404'
import { CONFIG } from './config.js';


class PermalinkApp extends App {
    constructor() {
        super();
        this.state.valid_slug = true;
    }

    evaluateSlug() {
        if (!Array.isArray(this.state.tweets) || !this.state.tweets.length) {
            this.setState({valid_slug: false});
        }
        else {
            this.setState({valid_slug: true});
        }
    }

    getTweet() {
      // Overloads App.getTweet so that on pageload the specific permalink tweet is fetched
      console.log(this.props);
      let { params } = this.props.match;
      let endpoint = CONFIG.API_TWEET_URL.concat('/').concat(params.permalink);

      fetch(endpoint)
          .then(results => results.json())
          .then(all_tweets => this.setState({tweets: all_tweets}))
          .then(() => this.evaluateSlug())
          .then(() => this.setState({loading: false}));
    }

    render() {
        if (this.state.loading) {
            return null;
        }
        // If a tweet matching the slug was returned, render normal page.
        if (this.state.valid_slug) {
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
        // Otherwise, get 404 error
        else {
            return <Err404/>
        }
    }
}

export default PermalinkApp;
