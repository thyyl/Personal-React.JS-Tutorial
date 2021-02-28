import React, {useEffect, useState} from 'react';
import gsap from 'gsap';
import './style.css';
import './sstyle.scss';
import Circle from '../img/img1.png';
import Line from '../img/img2.png';
import Circle2 from '../img/img3.png';
import Circle3 from '../img/img4.png';
import Triangle from '../img/img5.png';
import Cup from '../img/img6.png';

const Home = () => {
    const [mouseMove, setMouseMove] = useState(false);

    useEffect(() => {
        gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
        gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
        gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
        gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})
    })

    useEffect(() => {
        if (mouseMove) {
            document.addEventListener("mousemove", mouseMoveHandler)

            return () => {
                document.removeEventListener("mousemove", mouseMoveHandler)    
            } 
        } else {
            document.removeEventListener("mousemove", mouseMoveHandler)    
        }
    }, [mouseMove])

    const mouseMoveState = () => {
        
    }

    const mouseMoveHandler = (event) => {
        
    }

    return (
        <main class="l-main">
            <section class="home" id="home">
                <div class="home__container bd-grid">
                    <div class="home__img">
                        <img src={Circle} alt="" data-speed="-2" class="move" />
                        <img src={Line} alt="" data-speed="2" class="move" />
                        <img src={Circle2} alt="" data-speed="2" class="move"/>
                        <img src={Circle3} alt="" data-speed="-2" class="move" />
                        <img src={Triangle} alt="" data-speed="-2" class="move" />
                        <img src={Cup} alt="" data-speed="2" class="move" />
                    </div>

                    <div class="home__data">
                        <h1 class="home__title">Coffee <br/> Drink 3D</h1>
                        <p class="home__description">Let's help discover the best coffee drink <br/> of the week.</p>
                        <a href="/#" class="home__button">Get Started</a>
                    </div>
                </div>
            </section> 
        </main>
    );
}

export default Home;