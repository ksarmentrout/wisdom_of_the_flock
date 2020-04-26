import React from 'react';
import './App.css';
import './About.css';
import App from './App'


class About extends App {
    render() {
        if (this.state.loading) {
            return null;
        }
        else {
            return (
                <div className="MainPage">
                    <h1>About</h1>
                    <p>Hello world</p>
                </div>
            )
        }
    }
}

export default About;
