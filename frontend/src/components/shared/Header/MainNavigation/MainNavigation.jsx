import './MainNavigation.css';
import React from 'react';
import {Link} from 'react-router-dom';

function MainNavigation(props) {

    const dropdownRef = React.createRef();

    const toggleCategories = () => {
        if (dropdownRef.current?.classList.contains('hidden'))
        {
            dropdownRef.current.classList.remove('hidden')
        }
        else
        {
            dropdownRef.current.classList.add('hidden')
        }
    }

    return (
    <nav>
        <ul class="nav__list">
            <li class="nav__item">
                <button href="#" class="nav__link" onClick={toggleCategories}>Categories</button>
                <ul class="dropdown__list hidden" ref={dropdownRef}>
                    <li>
                        <div class="nav__block">
                            <div class="icon">
                                <span class="nav__block__symbol material-symbols-outlined">add_moderator</span>
                            </div>
                            <div class="nav__block__content">
                                <h2 class="nav__block__title" href="#">Moderation & Management</h2>
                                <p class="description" href="#">Welcome plugin, Custom Commands, Reaction Roles, Moderator.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="nav__block">
                            <div class="icon">
                                <span class="nav__block__symbol material-symbols-outlined">badge</span>
                            </div>
                            <div class="nav__block__content">
                                <h2 class="nav__block__title">Engagement & Fun</h2>
                                <p class="description">Levels, Birthdays, Giveaways, Music Quiz and Economy plugin.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="nav__block">
                            <div class="icon">
                                <span class="nav__block__symbol material-symbols-outlined">apps</span>
                            </div>
                            <div class="nav__block__content">
                                <h2 class="nav__block__title">Utilities</h2>
                                <p class="description">Ticket system plugin, Embeds, Search anything, Statistics, Temporary channel plugin.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="nav__item">
                <a href="#" class="nav__link">Support Server</a>
            </li>
            <li class="nav__item">
                <a href="#" class="nav__link">Features</a>
            </li>
            <li class="nav__item">
                <a href="#" class="nav__link">Tutorials</a>
            </li>
            <li class="nav__item">
                <a href="#" class="nav__link">Premium</a>
            </li>
        </ul>
    </nav>
    )
}

export default MainNavigation;