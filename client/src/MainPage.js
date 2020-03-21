import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


function DisplayTweet(props) {
    return (
        <h1 id={'main_tweet'}>{props.tweet_text}</h1>
    );
}


function MainPage(props) {
    return (
        <Container>
            <Container>
                <h1 className={'intro'}>Tweet list</h1>
            </Container>
            <DisplayTweet tweet_text={props.tweet_text}/>
            <Button onClick={props.buttonOnClick}>New Tweet</Button>
            <p className={'permalink'}>
                Permalink: localhost:3000/tweet/{props.permalink_slug}
            </p>
        </Container>
        )
}

export default MainPage
