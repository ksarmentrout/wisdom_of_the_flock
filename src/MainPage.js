import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { CONFIG } from './config.js';


function DisplayTweet(props) {
    return (
        <h1 id={'main_tweet'}>{props.tweet_text}</h1>
    );
}


function MainPage(props) {
    return (
        <Container>
            <Container>
                <h2 className={'intro'}>Someone asked:</h2>
            </Container>
            <DisplayTweet tweet_text={props.tweet_text}/>
            <Button onClick={props.buttonOnClick}>New Tweet</Button>
            <p className={'permalink'}>
                Permalink: {CONFIG.API_TWEET_URL.concat(props.permalink_slug)}
            </p>
        </Container>
        )
}

export default MainPage
