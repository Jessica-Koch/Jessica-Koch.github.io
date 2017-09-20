import React, {Component} from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <div className={classnames('landingPage')}>
                <div className="heading container">Welcome</div>

                <Link to="/posts" className="enter">Enter</Link>
            </div>
        )
    }
}

export default LandingPage;
