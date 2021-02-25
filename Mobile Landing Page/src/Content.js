import React from 'react';
import logo from './mobile-img.png';

function Content() {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 content-text">
                        <h6>DARE TO LEAP</h6>
                        <h1>CLEAN AND MINIMAL PROJECT MANAGEMENT</h1>
                        <a href="#">SHOP NOW</a>
                    </div>

                    <div className="col-md-6 content-img">
                        <img src={logo} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;