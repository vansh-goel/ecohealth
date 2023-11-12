import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import './partners.css'

const Partners = (props) => {
  return (
    <div className="partners-container">
      <Helmet>
        <title>Partners - EcoHealth+</title>
        <meta property="og:title" content="Partners - EcoHealth+" />
      </Helmet>
      <header data-thq="thq-navbar" className="partners-navbar-interactive">
        <Link to="/" className="partners-navlink">
          <h1 className="partners-text">EcoHealth+</h1>
        </Link>
        <div data-thq="thq-navbar-nav" className="partners-desktop-menu">
          <nav className="partners-links">
            <Link to="/founders" className="partners-navlink1">
              Founders
            </Link>
            <Link to="/map" className="partners-navlink2">
              Map
            </Link>
            <Link to="/plants" className="partners-navlink3">
              Plants
            </Link>
            <Link to="/events" className="partners-navlink4">
              Events
            </Link>
            <Link to="/feedback" className="partners-navlink5">
              Feedback
            </Link>
            <Link to="/engagement" className="partners-navlink6">
              Engagement
            </Link>
            <Link to="/partners" className="partners-navlink7">
              Partners
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="partners-burger-menu">
          <svg viewBox="0 0 1024 1024" className="partners-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="partners-mobile-menu">
          <div className="partners-nav">
            <div className="partners-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="partners-logo"
              />
              <div data-thq="thq-close-menu" className="partners-close-menu">
                <svg viewBox="0 0 1024 1024" className="partners-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="partners-links1">
              <span className="partners-text01">About</span>
              <span className="partners-text02">Features</span>
              <span className="partners-text03">Pricing</span>
              <span className="partners-text04">Team</span>
              <span className="partners-text05">Blog</span>
            </nav>
            <div className="partners-buttons">
              <button className="partners-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="partners-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="partners-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="partners-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="partners-hero">
        <div className="partners-hero1">
          <div className="partners-container1">
            <img
              alt="image"
              src="/ecohealth%2B%20logo-400h.png"
              className="partners-image"
            />
            <span className="partners-hero-sub-heading">
              Empowering urban communities for a greener future
            </span>
            <div className="partners-btn-group"></div>
          </div>
        </div>
      </div>
      <div className="partners-details">
        <div className="partners-details1">
          <div className="partners-container2">
            <h2 className="partners-details-heading heading2">
              About EcoHealth+
            </h2>
            <span className="partners-details-sub-heading">
              EcoHealth+ is an innovative initiative transforming Atlanta&apos;s
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
              redefining urban living for a sustainable future.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUzNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="partners-details-image"
          />
        </div>
      </div>
      <div className="partners-features">
        <div className="partners-features-container">
          <div className="partners-features1">
            <div className="partners-container3">
              <h2 className="partners-features-heading heading2">
                Discover EcoHealth+ Features
              </h2>
              <span className="partners-features-sub-heading">
                Explore the exciting features that make EcoHealth+ the ultimate
                platform for urban eco-development
              </span>
            </div>
            <div className="partners-container4">
              <FeatureCard
                Heading="Interactive Map"
                SubHeading="Explore existing and planned micro-green spaces in Atlanta"
              ></FeatureCard>
              <FeatureCard
                Heading="Plant Database"
                SubHeading="Access a comprehensive database of plants, their benefits, and how to grow them sustainably"
              ></FeatureCard>
              <FeatureCard
                Heading="Event Calendar"
                SubHeading="Stay updated on upcoming community events such as planting days, clean-up initiatives, or educational workshops"
              ></FeatureCard>
              <FeatureCard
                Heading="Feedback System"
                SubHeading="Share your thoughts, suggestions, and experiences to help us improve EcoHealth+"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="partners-pricing"></div>
      <div className="partners-gallery">
        <div className="partners-gallery1">
          <h1 className="partners-gallery-heading heading2">
            Explore EcoHealth+
          </h1>
          <span className="partners-gallery-sub-heading">
            Discover the beauty of nature and sustainable living
          </span>
          <div className="partners-container5">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1601736449915-be0eadf78ff2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName108"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1528132596460-787bb7adfd5f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName109"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1622689691329-6ad64054ead8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName110"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1591783097488-bda7e4e8653e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName111"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1596629095452-ecc885777256?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName112"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1622598952193-a6f835e9a5e2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName113"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1694242914741-fbeb16789b0f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName114"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName115"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1635560016770-1ca89686dd8e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName116"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1616164744625-2fa2759e86b4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName117"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1696242774734-8e712d7752d9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName118"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTc2MzUyOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName119"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="partners-banner">
        <div className="partners-banner1">
          <h1 className="partners-banner-heading heading2">
            Discover EcoHealth+
          </h1>
          <span className="partners-banner-sub-heading">
            Explore our interactive map, learn about plants and events, and
            provide feedback to help us improve.
          </span>
          <button className="partners-banner-button button">Learn More</button>
        </div>
      </div>
      <div className="partners-faq"></div>
      <div className="partners-footer"></div>
      <header data-thq="thq-navbar" className="partners-navbar-interactive1">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="partners-image1"
        />
        <div data-thq="thq-navbar-nav" className="partners-desktop-menu1">
          <nav className="partners-links2">
            <span>About</span>
            <span className="partners-text07">Features</span>
            <span className="partners-text08">Pricing</span>
            <span className="partners-text09">Team</span>
            <span className="partners-text10">Blog</span>
          </nav>
          <div className="partners-buttons1">
            <button className="partners-login1 button">Login</button>
            <button className="button">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="partners-burger-menu1">
          <svg viewBox="0 0 1024 1024" className="partners-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="partners-mobile-menu1">
          <div className="partners-nav1">
            <div className="partners-top1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="partners-logo1"
              />
              <div data-thq="thq-close-menu" className="partners-close-menu1">
                <svg viewBox="0 0 1024 1024" className="partners-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="partners-links3">
              <span className="partners-text11">About</span>
              <span className="partners-text12">Features</span>
              <span className="partners-text13">Pricing</span>
              <span className="partners-text14">Team</span>
              <span className="partners-text15">Blog</span>
            </nav>
            <div className="partners-buttons2">
              <button className="partners-login2 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="partners-icon14"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="partners-icon16"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="partners-icon18"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Partners
