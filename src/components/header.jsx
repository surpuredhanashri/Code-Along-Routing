import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <h2>React-app</h2>
                <ul>
                    <li> <Link to ="/">Home</Link></li>
                    <li> <Link to="/signup">signup</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;