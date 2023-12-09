import React from "react";
import Header from "./header";
import Footer from "./footer";
import founder1Image from "./vp.jpg";
import founder2Image from "./vg.png";

function Founders() {
    return (
        <div className="founders-page">
            <Header />
            <h1>Our Founders</h1>
            <div className="founders-container">
                <div className="founder-card">
                    <img src={founder1Image} alt="" className="founder-image" />
                    <div className="founder-info">
                        <h2>Vidit Pokharna</h2>
                        <p>Georgia Institute of Technology</p>
                        <p>Computer Science</p>
                        <p>
                            With a deep passion for environmental
                            sustainability and addressing global food shortages, Vidit is
                            committed to using his skills and knowledge to make a positive
                            impact in these crucial areas. He is an avid learner, always
                            seeking to expand his understanding and skills. Beyond academics,
                            Vidit is actively involved in community service, demonstrating a
                            strong dedication to giving back to society. He also values
                            spending quality time with family and friends, appreciating the
                            importance of personal connections and support in achieving his
                            goals and aspirations.
                        </p>
                    </div>
                </div>

                <div className="founder-card">
                    <img src={founder2Image} alt="" className="founder-image" />
                    <div className="founder-info">
                        <h2>Vansh Goel</h2>
                        <p>ABC University</p>
                        <p>Sustainable Development</p>
                        <p>
                            Founder 2 has a passion for sustainable development and is
                            pursuing a degree in Sustainable Development at ABC University.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Founders;
