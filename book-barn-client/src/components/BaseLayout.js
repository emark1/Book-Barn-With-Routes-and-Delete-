import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import './BaseLayout.css';

export class Menu extends Component {
    render() {
        return (
            <ul className="menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><Link to="/view-all-books">View All Books</Link></li>
            <li><Link to="/add-book">Add Book</Link></li>
            </ul>
        )
    }
}

export class Footer extends Component {
    render() {
        return (
            <div className="footer">Eric DeVelder COPYRIGHT BABY</div>
        )
    }
}

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                    {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}