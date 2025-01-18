import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="menu-open-bg"></div>
                <header className="header">
                    <div className="header__container">
                        <a href="index.html" className="header__logo">
                            Trump Wet Raccoon
                        </a>
                    </div>
                </header>
                <main className="page">
                    <section className="page__hero hero">
                        <div className="hero__container">
                            <h1 className="hero__title">
                                <img src="images/titlehero.png" alt="$TRUMPWC" />
                            </h1>
                            <div className="hero__actions">
                                <div className="hero__left">
                                    <a href="" className="hero__button button" data-da=".hero__container, 767.98,1">BUY NOW</a>
                                    <div className="hero__social">
                                        <a href="https://x.com/trump_WRC" target="_blank" className="hero__social-item social-item black">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M25.2013 1.53711H30.108L19.388 13.7904L32 30.4611H22.1253L14.392 20.3491L5.54133 30.4611H0.632L12.0987 17.3544L0 1.53844H10.1253L17.116 10.7811L25.2013 1.53711ZM23.48 27.5251H26.1987L8.648 4.31978H5.73067L23.48 27.5251Z" fill="white"></path>
                                            </svg>
                                        </a>
                                        <a href="https://t.me/TrumpWC" target="_blank" className="hero__social-item social-item blue">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3692 5.90662C26.6987 5.76794 27.0593 5.72011 27.4136 5.76811C27.7678 5.81611 28.1027 5.95818 28.3834 6.17953C28.6642 6.40089 28.8804 6.69344 29.0097 7.02673C29.139 7.36002 29.1766 7.72187 29.1185 8.07462L26.0945 26.4173C25.8012 28.1866 23.8599 29.2013 22.2372 28.32C20.8799 27.5826 18.8639 26.4466 17.0505 25.2613C16.1439 24.668 13.3665 22.768 13.7079 21.416C14.0012 20.26 18.6679 15.916 21.3345 13.3333C22.3812 12.3186 21.9039 11.7333 20.6679 12.6666C17.5985 14.984 12.6705 18.508 11.0412 19.5C9.60386 20.3746 8.85453 20.524 7.95853 20.3746C6.32386 20.1026 4.80786 19.6813 3.57053 19.168C1.89853 18.4746 1.97986 16.176 3.5692 15.5066L26.3692 5.90662Z" fill="white"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__image">
                                <img src="images/hero.png" alt="Image" />
                            </div>
                        </div>
                    </section>
                    <section className="page__about about" data-watch="navigator">
                        <div className="about__top"></div>
                        <div className="about__body">
                            <div className="about__container">
                                <div className="flw-img">
                                    <div className="box-img">
                                        <img src="images/s-1.jpg" alt="" />
                                    </div>
                                    <div className="box-img">
                                        <img src="images/s-2.jpg" alt="" />
                                    </div>
                                    <div className="box-img">
                                        <img src="images/s-3.jpg" alt="" />
                                    </div>
                                    <div className="box-img">
                                        <img src="images/s-4.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="video-play">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                >
                                    <source src="images/WRC Final.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="about__bottom"></div>
                    </section>
                    <section className="page__how-road how-road">
                        <div className="how-road__bg">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="how-road__how how" data-watch="navigator">
                            <div className="how__bg">
                                <span></span>
                                <span></span>
                            </div>
                            <div className="how__container">
                                <div className="how__body-box">
                                    <div className="how__body-decor">
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="how__body" data-watch-threshold="0.85" data-watch-once="" data-watch="">
                                        <h2 className="how__title-mobile">HOW TO BUY</h2>
                                        <div className="how__column">
                                            <h2 className="how__title">HOW</h2>
                                            <div className="how__item how__item--2" data-da=".how__column--2, 767.98,1" data-watch-threshold="0.75" data-watch-once="" data-watch="">
                                                <h4>Step 2</h4>
                                                <p>Ensure you have SOL in your wallet to convert to $TRUMPWC. If you don't possess any SOL, you can acquire it directly on PHANTOM, transfer it from another wallet, or purchase it on a different exchange and send it to your phantom wallet.
                                                </p>
                                            </div>
                                            <h2 className="how__title right">TO</h2>
                                        </div>
                                        <div className="how__column how__column--2">
                                            <div className="how__item how__item--1" data-watch-threshold="0.75" data-watch-once="" data-watch="">
                                                <h4>Step 1</h4>
                                                <p>Download the Phantom app or your preferred cryptocurrency wallet from the App Store or Google Play Store free of charge. If you're on desktop, get the Google Chrome extension by visiting phantom.app.
                                                </p>
                                            </div>
                                            <h2 className="how__title">BUY</h2>
                                            <div className="how__item small how__item--3" data-watch-threshold="0.75" data-watch-once="" data-watch="">
                                                <h4>Step 3</h4>
                                                <p>Connect your wallet to RAYDIUM. Paste the $TRUMPWC token address into RAYDIUM, select the about of eth that you want to buy, and confirm the transaction. Then, authorize the transaction on PHANTOM. now you are the holder
                                                </p>
                                            </div>
                                        </div>
                                        <div className="how__image">
                                            <img src="images/how.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="footer">
                    <div className="footer__top">
                        <div className="footer__top-image">
                            <img src="images/footerImage.png" alt="Image" />
                        </div>
                        <div className="footer__container">
                            <div className="footer__top-body">
                                <div className="footer__top-menu">
                                    <h3>$</h3>
                                    <ul>
                                        <li>
                                            <a href="index.html#" data-goto=".about" data-goto-top="60">ABoUT</a>
                                        </li>
                                        <li>
                                            <a href="index.html#" data-goto=".how" data-goto-top="60">HoW To BUY</a>
                                        </li>
                                        <li>
                                            <a href="index.html#" data-goto=" " data-goto-top="120">DEXTooLS</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__top-socail">
                                    <h3>SocialS & more</h3>
                                    <ul>
                                        <li>
                                            <a target="_blank" href="https://x.com/trump_WRC" className="social-item white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                    <path d="M25.2013 1.53711H30.108L19.388 13.7904L32 30.4611H22.1253L14.392 20.3491L5.54133 30.4611H0.632L12.0987 17.3544L0 1.53844H10.1253L17.116 10.7811L25.2013 1.53711ZM23.48 27.5251H26.1987L8.648 4.31978H5.73067L23.48 27.5251Z" fill="black"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://t.me/TrumpWC" className="social-item blue">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3692 5.90662C26.6987 5.76794 27.0593 5.72011 27.4136 5.76811C27.7678 5.81611 28.1027 5.95818 28.3834 6.17953C28.6642 6.40089 28.8804 6.69344 29.0097 7.02673C29.139 7.36002 29.1766 7.72187 29.1185 8.07462L26.0945 26.4173C25.8012 28.1866 23.8599 29.2013 22.2372 28.32C20.8799 27.5826 18.8639 26.4466 17.0505 25.2613C16.1439 24.668 13.3665 22.768 13.7079 21.416C14.0012 20.26 18.6679 15.916 21.3345 13.3333C22.3812 12.3186 21.9039 11.7333 20.6679 12.6666C17.5985 14.984 12.6705 18.508 11.0412 19.5C9.60386 20.3746 8.85453 20.524 7.95853 20.3746C6.32386 20.1026 4.80786 19.6813 3.57053 19.168C1.89853 18.4746 1.97986 16.176 3.5692 15.5066L26.3692 5.90662Z" fill="white"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__container">
                            <div className="footer__bottom-body">
                                <span>2025 © ALL RIGHTS RESERVED</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
