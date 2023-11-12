// MapContainer.js
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './map.css'

class MapContainer extends Component {
  state = {
    greenspaces: [],
    activeMarker: null,
    selectedPlace: null,
  };

  componentDidMount() {
    this.searchGreenspaces();
  }

  searchGreenspaces = () => {
    const { google } = this.props;
    const service = new google.maps.places.PlacesService(
      document.createElement('div')
    );

    service.textSearch({
      query: 'Greenspaces in Atlanta',
      location: new google.maps.LatLng({ lat: 33.7490, lng: -84.3880 }),
      radius: 8000,
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ greenspaces: results });
      }
    });
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
    });
  };


  render() {
    const { google } = this.props;
    const { greenspaces, activeMarker, selectedPlace } = this.state;

    return (
      <>
      <Helmet>
        <title>Map - EcoHealth+</title>
        <meta property="og:title" content="Map - EcoHealth+" />
      </Helmet>
      <header data-thq="thq-navbar" className="map-navbar-interactive">
        <Link to="/" className="map-navlink">
          <h1 className="map-text">EcoHealth+</h1>
        </Link>
        <div data-thq="thq-navbar-nav" className="map-desktop-menu">
          <nav className="map-links">
            <Link to="/founders" className="map-navlink1">
              Founders
            </Link>
            <Link to="/map" className="map-navlink2">
              Map
            </Link>
            <Link to="/plants" className="map-navlink3">
              Plants
            </Link>
            <Link to="/events" className="map-navlink4">
              Events
            </Link>
            <Link to="/feedback" className="map-navlink5">
              Feedback
            </Link>
            <Link to="/engagement" className="map-navlink6">
              Engagement
            </Link>
            <Link to="/partners" className="map-navlink7">
              Partners
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="map-burger-menu">
          <svg viewBox="0 0 1024 1024" className="map-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="map-mobile-menu">
          <div className="map-nav">
            <div className="map-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="map-logo"
              />
              <div data-thq="thq-close-menu" className="map-close-menu">
                <svg viewBox="0 0 1024 1024" className="map-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="map-links1">
              <span className="map-text1">About</span>
              <span className="map-text2">Features</span>
              <span className="map-text3">Pricing</span>
              <span className="map-text4">Team</span>
              <span className="map-text5">Blog</span>
            </nav>
            <div className="map-buttons">
              <button className="map-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="map-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="map-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="map-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="map-hero">
        <div className="map-hero1">
          <div className="map-container1">
          <Map
          className="map"
            google={google}
            zoom={12}
            initialCenter={{
              lat: 33.7490,
              lng: -84.3880,
            }}
            style={{ width: '100%', height: '60%' }}
          >
            {greenspaces.map((place) => (
              <Marker
                key={place.place_id}
                position={{
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                }}
                name={place.name}
                onClick={this.onMarkerClick}
              />
            ))}
            <InfoWindow
              marker={activeMarker}
              visible={!!activeMarker}
              onClose={() => this.setState({ activeMarker: null, selectedPlace: null })}
            >
              <div>
                <h3>{selectedPlace && selectedPlace.name}</h3>
              </div>
            </InfoWindow>
          </Map>
            <div className="map-btn-group"></div>
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDKnPQXQqgwlThYL2om8dykd12QHd6d9gY',
})(MapContainer);