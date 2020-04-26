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
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere ullamcorper ipsum, vel faucibus libero posuere sed. Fusce quis augue egestas, sodales sapien id, accumsan lectus. Donec et vehicula odio, at sodales ligula. Ut sit amet ultrices ante. Ut a pharetra dolor. Pellentesque maximus iaculis dapibus. Sed rutrum, urna quis rutrum dignissim, quam erat volutpat risus, nec volutpat velit lectus in metus. Phasellus eleifend convallis nunc, sit amet fermentum metus tristique ac. Duis condimentum suscipit ligula, ac faucibus nibh iaculis eu. Aenean sed pellentesque risus, at volutpat lorem. Praesent ultrices enim dui, sit amet lobortis arcu sollicitudin non.
                        </p>
                        <p>
    Vivamus feugiat velit vel turpis eleifend, id hendrerit diam dictum. Sed sed lorem porttitor, finibus metus et, dapibus nisl. Pellentesque congue velit in risus volutpat porttitor. Suspendisse vulputate magna sed velit ornare interdum. Pellentesque sem tellus, aliquam ac quam non, varius luctus risus. Phasellus efficitur gravida lobortis. Proin orci dolor, tempus id justo vel, convallis tristique quam. Cras porta quam finibus, aliquet urna in, tincidunt nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam at varius dolor, sit amet porttitor nisl.
                        </p>
                        <p>
    Vestibulum efficitur convallis porttitor. Nulla venenatis elementum urna ut tempor. Suspendisse a leo vitae sapien efficitur consequat sit amet vitae libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi neque, suscipit at tellus id, fermentum mattis dolor. Nulla semper in ante id placerat. Fusce viverra molestie dui quis malesuada. Duis dapibus nunc sit amet consequat convallis. Nunc porta imperdiet placerat. Donec rhoncus orci nec nisi finibus, in efficitur sem pharetra.
                        </p>
                        <p>
    Nullam consequat vitae massa sed interdum. Mauris dapibus metus id orci malesuada imperdiet. Ut nibh ipsum, varius quis rhoncus ac, scelerisque vitae eros. Morbi euismod erat in scelerisque porttitor. Suspendisse urna nunc, porttitor eu blandit quis, sollicitudin et enim. Phasellus vitae arcu efficitur, commodo justo sit amet, iaculis augue. Aliquam interdum porttitor quam, sed vulputate nunc varius sed. Duis congue lacinia libero, sed ultrices magna lobortis a.
                        </p>
                        <p>
    Etiam pulvinar in enim ac euismod. Proin gravida neque vel ipsum semper, id bibendum lacus lacinia. Phasellus fringilla, urna non rhoncus aliquam, quam nisi porttitor sapien, vel hendrerit mauris risus sed nisi. Morbi faucibus tempor mollis. Fusce commodo ex sed sapien convallis, a ornare mi venenatis. In justo leo, tempus pretium dui non, consequat tincidunt ante. Pellentesque at elementum urna. Pellentesque ultricies nisi augue, sed sagittis eros feugiat non. Praesent euismod sed ipsum luctus pharetra. Morbi eget nunc in enim facilisis aliquam. Donec eget feugiat nisi.
                        </p>
                    </div>
                </div>
            )
        }
    }
}

export default About;
