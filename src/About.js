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
                        Wisdom of the Flock is a curated collection of tweets posted over March-May 2020 that each 
                        ask what "should" or "must" be. The collection as a whole investigates how people use their 
                        Twitter audience as a collective intelligence to answer questions.
                        </p>
                        <p>
                        Questions using this language ask how the world ought to be and what actions are morally acceptable, 
                        reaching for some authority to provide the answer. By displaying some of them here, Wisdom of the Flock 
                        looks at the types of questions people trust the public to respond to as that authority.
                        </p>
                        <p>
                        This project began in 2019 but was completed in 2020 in the midst of public health and social justice crises. 
                        This backdrop of uncertainty, anxiety, sorrow, and restlessness is reflected in the full corpus of 
                        tweets and provides important context for the scope of what is asked.
                        </p>
                        <p>
                        The questions here vary from lighthearted to rhetorical to deeply sincere, displaying 
                        the range of answers and guidance we seek from other people. 
                        </p>
                        <p>
                        More information, including links to both the full set of collected tweets and the curated 
                        subset on display, will be made available soon. If you recognize a tweet here as your own and would 
                        like it to be either credited or removed, please contact me.
                        </p>
                        <p className='ref_section'>
                            Created by <a href="https://ksarmentrout.com" className='about_link'>
                                Keaton Armentrout
                            </a><br/>
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
