import Header from '../shared/Header/Header.jsx';
import './HomePage.css';
import avatar from './normal_11.png';
import logging from './loggingsystem.jpg';
import economy__image from './economy__image.jpg';
import ticketsystem from './ticketsystem.jpg';

function HomePage(props) {
    return (
    <div>
        <Header/>
        <div class="intro">
        <div class="container">
            <div class="intro__content">
                <div class="content__left">
                    <h2 class="main__text">The best Discord <br/>Bot for your server</h2>
                    <p class="main__description description">Configure moderation, leveling, Twitch alerts, and much more with the most easy-to-use dashboard!</p>
                    <div class="content__left__block">
                        <div class="content__left__block__content">
                            <span class="material-symbols-outlined tick">
                                done
                            </span>
                            <p class="content__left__block_description description">Economy</p>
                        </div>
                    </div>
                    <div class="content__left__block">
                        <div class="content__left__block__content">
                            <span class="material-symbols-outlined tick">
                                done
                            </span>
                            <p class="content__left__block_description description">Ticket System</p>
                        </div>
                    </div>
                    <div class="content__left__block">
                        <div class="content__left__block__content">
                            <span class="material-symbols-outlined tick">
                                done
                            </span>
                            <p class="content__left__block_description description">Moderation</p>
                        </div>
                    </div>
                    <div class="content__left__block">
                        <div class="content__left__block__content">
                            <span class="material-symbols-outlined tick">
                                done
                            </span>
                            <p class="content__left__block_description description">Fun commands</p>
                        </div>
                    </div>
                    <div class="content__left__block">
                        <div class="content__left__block__content">
                            <span class="material-symbols-outlined tick">
                                done
                            </span>
                            <p class="content__left__block_description description">Logging system</p>
                        </div>
                    </div>
                    <div class="button__container button__container-multiple">
                        <button class="btn">Add to Discord</button>
                        <button class="btn snd_btn">See Features</button>
                    </div>
                </div>
                <div class="content__right">
                    <img src={avatar} alt="Avatar" class="main__image"/>
                </div>
            </div>
        </div>
    </div>
    <div class="main_section container">
        <div class="banner__reverse banner">
            <div class="banner__block">
                <h2 class="main__text submain__text">Logging system: Setup log system and be informed of all actions happening on your Discord server.</h2>
                <p class="description banner__description">Be informed of all happening actions on your Discord server. It includes many options.</p>
                <div class="button__container">
                    <button class="btn main__button">Try out logging system</button>
                </div>
            </div>
            <div class="banner__block">
                <img src={logging} alt="Avatar" class="banner__image"/>
            </div>
        </div>
        <div class="banner">
            <div class="banner__block">
                <img src={economy__image} alt="Avatar" class="banner__image"/>
            </div>
            <div class="banner__block">
                <h2 class="main__text submain__text">Economy system: Setup economy system on your discord server and make more entertainment on server!</h2>
                <p class="description banner__description">Get access to economy system! Shop, work, bet systems are available for you!</p>
                <div class="button__container">
                    <button class="btn main__button">Try out economy system</button>
                </div>
            </div>
        </div>
        <div class="banner__reverse banner">
            <div class="ticker__banner__block banner__block">
                <h2 class="main__text submain__text">Ticket System: Setup ticket system on your server and make it easier to answer on members reports and questions.</h2>
                <p class="description banner__description">Make it easier to be in charge of your server.</p>
                <div class="button__container">
                    <button class="btn main__button">Try out ticket system</button>
                </div>
            </div>
            <div class="banner__block">
                <img src={ticketsystem} alt="Avatar" class="banner__image"/>
            </div>
        </div>
    </div>
    <section class="invite__bot">
        <div class="invite__bot__container">
            <div class="invite__text main__text">Personalise your own discord server right now!</div>
        </div>
        <div class="button__container">
            <button class="btn btn2">Add to discord</button>
        </div>
    </section>
    <footer class="footer">
        <div class="footer__container">
            <div class="cludy">
                <div class="img__title">
                    <img src={avatar} alt="Avatar" class="account__image"/>
                    <h2 class="title__link">CLUDY</h2>
                </div>
                <p class="description footer__description">The best Discord Bot with help of which you can easily configure your Discord server.</p>
                <p class="description footer__copyrights">All copyrights reserved © 2023 Nusswell Works</p>
            </div>
            <div class="plugins">
                <div class="footer__plugins">
                    <h2 class="footer_plugins_title">Plugins</h2>
                    <p class="description footer_plugins_description">
                        <a href="#">Server configuration</a>
                    </p>
                    <p class="description footer_plugins_description">Utilites</p>
                    <p class="description footer_plugins_description">Social Alerts</p>
                    <p class="description footer_plugins_description">Fun category</p>
                </div>
                <div class="footer__plugins">
                    <h2 class="footer_plugins_title">Plugins</h2>
                    <p class="description footer_plugins_description">Server configuration</p>
                    <p class="description footer_plugins_description">Utilites</p>
                    <p class="description footer_plugins_description">Social Alerts</p>
                    <p class="description footer_plugins_description">Fun category</p>
                </div>
                <div class="footer__plugins">
                    <h2 class="footer_plugins_title">Plugins</h2>
                    <p class="description footer_plugins_description">Server configuration</p>
                    <p class="description footer_plugins_description">Utilites</p>
                    <p class="description footer_plugins_description">Social Alerts</p>
                    <p class="description footer_plugins_description">Fun category</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
    )
}

export default HomePage;