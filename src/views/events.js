import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import BlogPostCard2 from '../components/blog-post-card2'
import './events.css'

const Events = (props) => {
  return (
    <div className="events-container">
      <Helmet>
        <title>Events - EcoHealth+</title>
        <meta property="og:title" content="Events - EcoHealth+" />
      </Helmet>
      <header data-thq="thq-navbar" className="events-navbar-interactive">
        <Link to="/" className="events-navlink">
          <h1 className="events-text">EcoHealth+</h1>
        </Link>
        <div data-thq="thq-navbar-nav" className="events-desktop-menu">
          <nav className="events-links">
            <Link to="/founders" className="events-navlink1">
              Founders
            </Link>
            <Link to="/map" className="events-navlink2">
              Map
            </Link>
            <Link to="/plants" className="events-navlink3">
              Plants
            </Link>
            <Link to="/events" className="events-navlink4">
              Events
            </Link>
            <Link to="/feedback" className="events-navlink5">
              Feedback
            </Link>
            <Link to="/engagement" className="events-navlink6">
              Engagement
            </Link>
            <Link to="/partners" className="events-navlink7">
              Partners
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="events-burger-menu">
          <svg viewBox="0 0 1024 1024" className="events-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="events-mobile-menu">
          <div className="events-nav">
            <div className="events-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="events-logo"
              />
              <div data-thq="thq-close-menu" className="events-close-menu">
                <svg viewBox="0 0 1024 1024" className="events-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="events-links1">
              <span className="events-text1">About</span>
              <span className="events-text2">Features</span>
              <span className="events-text3">Pricing</span>
              <span className="events-text4">Team</span>
              <span className="events-text5">Blog</span>
            </nav>
            <div className="events-buttons">
              <button className="events-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="events-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="events-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="events-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="events-blog">
        <div className="events-container1">
          <a
            href="https://www.eventbrite.com/e/climate-techies-atlanta-monthly-member-sustainability-networking-meetup-tickets-734045238067?aff=ebdssbdestsearch"
            target="_blank"
            rel="noreferrer noopener"
            className="events-link"
          >
            <BlogPostCard2
              when="Tuesday, November 28"
              label="Climate"
              title="Climate Techies Atlanta Monthly Member Sustainability &amp; Networking Meetup"
              author="4WARD.VC"
              image_src="https://images.unsplash.com/photo-1579003593419-98f949b9398f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fENsaW1hdGUlMjBUZWNoaWVzfGVufDB8fHx8MTY5OTc3MzYwOXww&amp;ixlib=rb-4.0.3&amp;w=1500"
              description="Connect &amp; network with fellow ATL Climate Techies founders, investors &amp; corporates focused on sustainability, climate change and cleantech."
              rootClassName="rootClassName3"
              className="events-component"
            ></BlogPostCard2>
          </a>
        </div>
        <div className="events-container2">
          <a
            href="https://allevents.in/atlanta/aqearth-west-atlanta-presents-air-quality-community-conversations/10000750109767507"
            target="_blank"
            rel="noreferrer noopener"
            className="events-link1"
          >
            <BlogPostCard2
              when="Thursday, November 30"
              label="Climate"
              title="Air Quality Community Conversations"
              author="AQEarth West Atlanta"
              image_src="https://images.unsplash.com/photo-1547963802-25f153e14080?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fEFpciUyMFF1YWxpdHklMjBDb21tdW5pdHklMjBDb252ZXJzYXRpb25zfGVufDB8fHx8MTY5OTc3NDE3Mnww&amp;ixlib=rb-4.0.3&amp;w=1500"
              description="The goal of this event is to broaden the discussion on what we can do to protect ourselves and each other from toxic conditions in West Atlanta neighborhoods. We are promoting conversations and action toward improving community health now."
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
              className="events-component1"
            ></BlogPostCard2>
          </a>
        </div>
        <a
          href="https://www.meetup.com/traildames/events/294993243/"
          target="_blank"
          rel="noreferrer noopener"
          className="events-link2"
        >
          <BlogPostCard2
            when="Sunday, December 3"
            label="Physical Activity"
            title="Georgia Hike Leader Meeting &amp; Holiday Lunch"
            author="Trail Dames"
            image_src="https://images.unsplash.com/photo-1480884927074-399ee3369f52?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxoaWtlfGVufDB8fHx8MTY5OTc3NDIzN3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
            description="Embark on a festive holiday season hike with a lively group in Georgia, filled with stunning views and endless enjoyment!"
            profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName2"
            className="events-component2"
          ></BlogPostCard2>
        </a>
      </div>
    </div>
  )
}

export default Events
