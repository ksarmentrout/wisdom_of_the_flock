import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './MainPage.css';


function DisplayTweet(props) {
    return (
        <Typography variant="h2" id={'main_tweet'}>{props.tweet_text}</Typography>
    );
}

const copyToClipboard = str => {
  const el = document.createElement('textarea');  // Create a <textarea> element
  el.value = str;                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }
  document.querySelector('#permalink_button').innerText = 'Copied!';
};

function MainPage(props) {
    return (
        <div>
            <div className="header">
                <div className="site_name">
                    Wisdom of the Flock
                </div>
                <div className="menu">
                    <a href="#" className="link">
                        <div className="link_title">About</div>
                    </a>
                </div>
            </div>
            <Container className="MainPage">
                <div className="tweet_holder">
                    <DisplayTweet tweet_text={props.tweet_text}/>
                </div>
                <div>
                    <Button
                        onClick={props.buttonOnClick}
                        id="new_question+button"
                    >New Question</Button>
                </div>
                <div>
                    <Button
                        id="permalink_button"
                        onClick={() => copyToClipboard(
                            'https://wisdomoftheflock.com/tweet/'.concat(props.permalink_slug)
                        )}
                    >Copy Permalink</Button>
                </div>
            </Container>
        </div>
        )
}

export default MainPage
