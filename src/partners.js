import React from "react";
import Header from "./header";
import Footer from "./footer";
import partner1 from "./startup-exchange.jpeg";
import partner2 from "./umi-feeds.png";

function Founders() {
    return (
        <div className="partners-page">
            <Header />
            <h1>Our Partners</h1>
            <div className="partners-container">
                <div className="partners-card">
                    <img src={partner1} alt="" className="partners-image" />
                    <div className="partners-info">
                        <h2>Startup Exchange</h2>
                        <h3>ImpactHack Host/Track Sponsor</h3>
                    </div>
                </div>

                <div className="partners-card">
                    <img src={partner2} alt="" className="partners-image" />
                    <div className="partners-info">
                        <h2>Umi Feeds</h2>
                        <h3>Challenge Sponsor</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Founders;
