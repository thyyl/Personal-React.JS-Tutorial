import React, {useEffect} from 'react';
import gsap from 'gsap';
import './style.css';
import './sstyle.scss';

const Nav = () => {
    useEffect(() => {
        gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
        gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})    
    }, []);

    return (
        <header class="l-header">
        <nav class="nav bd-grid">
            <div>
                <a href="/#" class="nav__logo">Coffee</a>
            </div>

            <div class="nav__toggle" id="nav-toggle">
                <i class='bx bx-menu'></i>
            </div>

            <div class="nav__menu" id="nav-menu">
                <div class="nav__close" id="nav-close">
                    <i class='bx bx-x'></i>
                </div>

                <ul class="nav__list">
                    <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                    <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                    <li class="nav__item"><a href="#skills" class="nav__link">Blog</a></li>
                    <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
    );
}

export default Nav;