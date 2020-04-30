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
                <div className="AboutPage">
                    <Header/>
                    <div className="about_content">
                        <h1 id="about_title">About</h1>
                        <p>
                            Wisdom of the Flock investigates how people use their Twitter audience as a collective
                            intelligence to answer primarily moral questions.
                        </p>
                        <p>
                            Over February-April 2020, tweets posing "should" and "must" questions to the general public
                            were collected, of which a subset was curated for inclusion here. Questions using this
                            language ask how the world ought to be and what actions are morally permissible, reaching
                            for some authority to provide the answer. By displaying some of them here, Wisdom of the
                            Flock looks at the types of questions that people trust the public to respond to as that
                            authority.
                        </p>
                        <p>
                            This project began in 2019 but was completed in 2020 in the midst of a global pandemic.
                            This backdrop of uncertainty, anxiety, sorrow, and restlessness is reflected in the full
                            corpus of collected tweets and provides crucial context for considering the types of
                            questions being asked.
                        </p>
                        <p>
                            The questions here range from lighthearted to rhetorical to deeply sincere, together
                            displaying the range of answers we seek from other people.
                        </p>
                        <p>
                            More information, including links to the full corpus of collected tweets, will be
                            available soon.
                        </p>
                        <p className='ref_section'>
                            Created by <a href="https://ksarmentrout.com" className='about_link'>
                                Keaton Armentrout
                            </a>.<br/>
                            <a href="https://twitter.com/keaton_sa" className='about_link about_refs'>
                                @keaton_sa
                            </a><br/>
                            <a href="mailto:info@wisdomoftheflock.com" className='about_link about_refs'>
                                info@wisdomoftheflock.com
                            </a><br/>
                        </p>
                    </div>
                </div>
            )
        }
    }
}

export default About;
