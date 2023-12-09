import React from 'react';
import Header from './header';
import Footer from './footer';
import projectimage from './ecohealth+.png';

function HomePage() {
    return (
        <div className="homepage">
            <Header />
            <section className="project-section">
                <img src={projectimage} alt="" className="project-image" />
                <h2 className="project-text">Empowering urban communities for a greener future</h2>
            </section>
            <section className="about-section">
                <div className="about-content">
                    <h2>About EcoHealth+</h2>
                    <p>EcoHealth+ is an innovative initiative transforming Atlanta&apos;s
                        urban fabric into a tapestry of thriving, green
                        micro-environments. Rooted in the belief that urban spaces can
                        harmoniously coexist with nature, our mission is to revitalize
                        underutilized urban plots by creating small-scale green areas that
                        enhance biodiversity, improve environmental health, and foster
                        community well-being. Our projects focus on involving local
                        communities in the development and upkeep of these spaces,
                        ensuring that the benefits of urban greenery are accessible to
                        everyone. By integrating native plant species, promoting
                        ecological balance, and enhancing air quality, EcoHealth+ is
                        redefining urban living for a sustainable future.</p>
                </div>
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUzNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                    className="about-image"
                />
            </section>
            <section className="feature-section">
                <h1 className="feature-title">Discover EcoHealth+ Features</h1>
                <p className="feature-subtitle">Explore the exciting features that make EcoHealth+ the ultimate platform for urban eco-development</p>
                <div className="feature-cards">
                    <div className="card">
                        <h2>Interactive Map</h2>
                        <p>Explore existing and planned micro-green spaces in Atlanta</p>
                    </div>
                    <div className="card">
                        <h2>Plant Database</h2>
                        <p>Access a comprehensive database of plants, their benefits, and how to grow them sustainably</p>
                    </div>
                    <div className="card">
                        <h2>Event Calendar</h2>
                        <p>Stay updated on upcoming community events such as planting days, clean-up initiatives, or educational workshops</p>
                    </div>
                    <div className="card">
                        <h2>Feedback System</h2>
                        <p>Share your thoughts, suggestions, and experiences to help us improve EcoHealth+</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default HomePage;
