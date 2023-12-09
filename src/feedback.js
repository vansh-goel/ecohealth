import Header from "./header";
import Footer from "./footer";
import React, { useState } from 'react';

function Feedback() {
    const [feedbackData, setFeedbackData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    const handleChange = (e) => {
        setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedbackData);
    };

    return (
        <div className="feedback-page">
            <Header />
            <h1>Feedback</h1>
            <p>We value your feedback! Please let us know what you think about EcoHealth+.</p>
            <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={feedbackData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={feedbackData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Feedback</label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        placeholder="Your Feedback"
                        rows="5"
                        value={feedbackData.feedback}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Submit Feedback</button>
            </form>
            <Footer />
        </div>
    );
}

export default Feedback;
