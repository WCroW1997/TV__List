import React, { Component } from 'react'
import { ImFilm } from 'react-icons/im'

export class Header extends Component {
    render() {
        return (
            <div className='container'>
                <header className='header'>
                    <a href='/' className='logo'>
                        <ImFilm className='logo' />
                    </a>
                    <nav className='nav'>

                        <ul className='nav__list'>
                            <li className='nav__item'><a href='/'>Home</a></li>
                            <li className='nav__item'><a href='/'>Film</a></li>
                            <li className='nav__item'><a href='/'> TV series</a></li>
                            <li className='nav__item'><a href='/'>Actors</a></li>
                        </ul>
                    </nav>
                    <div className='header__buttons buttons__group'>
                        <button className='btn'>Log In</button>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header