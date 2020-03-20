import React from 'react';
// import logo from './logo.svg';
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

  getNewTweet() {
      fetch(CONFIG.API_RAND_URL)
          .then(results => results.json())
          .then(all_tweets => this.setState({tweets: all_tweets}));
  }

  componentDidMount() {
      this.getNewTweet()
  }

  render() {
    return (
      <Container>
          <Container>
              <h1 className={'intro'}>Tweet list</h1>
          </Container>
          <DisplayTweet tweet_text={this.state.tweets.slice(0, 1).map(t => t.tweet_text)}/>
          <Button onClick={() => this.getNewTweet()}>New Tweet</Button>
      </Container>
    );
  }
}

export default App;