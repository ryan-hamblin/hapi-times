import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
    render() {
        const{children} = this.props;
        return (
            <div>
                <Link to="library">Library</Link>
                <Link to="upload">Uploader</Link>
                {children}
            </div>
        );
    }
}

export default Home;