import React from 'react';
import './App.css';
import './About.css';
import App from './App'
import Header from './Header.js'


class About extends App {
    render() {
        if (this.state.loading) {
            return null;
        }
        else {
            return (
                <div className="MainPage">
                    <Header/>
                    <h1>About</h1>
                    <p>Hello world</p>
                </div>
            )
        }
    }
}

export default About;
