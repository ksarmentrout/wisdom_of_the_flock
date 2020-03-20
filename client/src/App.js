import React from 'react';
import './App.css';
import { CONFIG } from './config.js';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


function DisplayTweet(props) {
    return (
        <h1 id={'main_tweet'}>{props.tweet_text}</h1>
    );
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        tweets: []
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
          .then(all_tweets => this.setState({tweets: all_tweets}));
  }

  componentDidMount() {
      this.getTweet()
  }

  render() {
    return (
      <Container>
          <Container>
              <h1 className={'intro'}>Tweet list</h1>
          </Container>
          <DisplayTweet tweet_text={this.state.tweets.slice(0, 1).map(t => t.tweet_text)}/>
          <Button onClick={() => this.getRandomTweet()}>New Tweet</Button>
          <p className={'permalink'}>
              Permalink: localhost:3000/{this.state.tweets.slice(0, 1).map(t => t.permalink_slug)}
          </p>
      </Container>
    );
  }
}

export default App;