import React from 'react';
import { Calendar, MapPin, Users, Star, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Full_Illustration from '../assets/Full_Illustration.png';
import Qiskit_Logo from '../assets/qiskit logo.svg';
import IBM_Quantum_Logo from '../assets/IBM Quantum Logo.png';
import Crop_Future from '../assets/Crop_Future.png';
import Crop_Einstein from '../assets/Crop_Einstein.png';

const Home: React.FC = () => {
  const events = [
    {
      title: "Quantum Computing Fundamentals",
      description: "Introduction to quantum mechanics and quantum computing principles",
      icon: "🔬"
    },
    {
      title: "Hands-on Qiskit Workshop",
      description: "Interactive workshop using Qiskit for quantum circuit design",
      icon: "💻"
    },
    {
      title: "Quantum Hackathon",
      description: "Overnight hackathon focusing on quantum applications",
      icon: "🏆"
    },
    {
      title: "Industry Expert Talks",
      description: "Keynotes from quantum computing industry leaders",
      icon: "🎤"
    },
    {
      title: "Panel Discussions",
      description: "Interactive discussions on quantum computing future",
      icon: "💬"
    },
    {
      title: "Networking Sessions",
      description: "Connect with quantum enthusiasts and researchers",
      icon: "🤝"
    }
  ];

  // const timelineData = [
  //   {
  //     day: "Day 1",
  //     date: "October 29, 2025",
  //     events: [
  //       "Opening Ceremony - 8:30 AM",
  //       "Introduction - 9:00 AM",
  //       "Qiskit Workshop - 2:00 PM",
  //       "Industry Keynote - 11:30 PM"
  //     ]
  //   },
  //   {
  //     day: "Day 2",
  //     date: "November 16, 2025",
  //     events: [
  //       "Hackathon Begins - 9:00 AM",
  //       "Expert Panel - 11:00 AM",
  //       "Project Presentations - 3:00 PM",
  //       "Closing Ceremony - 5:00 PM"
  //     ]
  //   }
  // ];


  const timelineData = [
    {
      day: "Day 1",
      date: "October 29, 2025",
      events: [
        "Opening Ceremony: 8:30 - 11:30",
        "Workshop: 11:30 - 13:00",
        "Lunch Session: 13:00 - 14:00",
        "Challenge-1: 14:00 - 16:00"
      ]
    },
    {
      day: "Day 2",
      date: "October 30, 2025",
      events: [
        "Lecture Sessions: 9:00 - 13:00",
        "Lunch Session: 13:00 - 14:00",
        "Challenge-2: 14:00 - 16:00",
        "Hackathon Time: 18:00 - 08:00"
      ]
    },
    {
      day: "Day 3",
      date: "October 31, 2025",
      events: [
        "Breakfast Session: 8:00 - 9:00",
        "Felicitation & Conclusion: 9:00 - 10:00"
      ]
    }
  ];
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={Full_Illustration} alt="Quantum Illustration" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <AnimatedSection className="hero-content">
            <div className="hero-logos">
              <img src={Qiskit_Logo} alt="Qiskit" className="hero-logo" />
              <img src={IBM_Quantum_Logo} alt="IBM Quantum" className="hero-logo" />
            </div>
            <h1 className="hero-title">
              Qiskit Fall Fest <span className="gradient-text">2025</span>
            </h1>
            <p className="hero-subtitle">VIT Chennai | Team Quantumplators</p>
            <p className="hero-quote">
              "Quantum computing is not just about processing power; it's about reimagining what's possible."
            </p>
            <div className="hero-details">
              <div className="hero-detail">
                <Calendar className="icon" />
                <span>October 29-31, 2025</span>
              </div>
              <div className="hero-detail">
                <MapPin className="icon" />
                <span>VIT Chennai Campus</span>
              </div>
            </div>
            <button className="cta-button">
              Register Now <ArrowRight className="ml-2" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">About the Event</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Qiskit Fall Fest 2025 is a premier quantum computing event that brings together students,
                  researchers, and industry professionals to explore the fascinating world of quantum computing.
                  Organized by Team Quantumplators at VIT Chennai, this event features workshops, hackathons,
                  and expert talks designed to advance quantum computing knowledge and foster innovation.
                </p>
                <p>
                  Join us for three days of intensive learning, hands-on experience with Qiskit, and networking
                  opportunities with quantum computing enthusiasts from around the world. Whether you're a
                  beginner or an expert, there's something for everyone at Qiskit Fall Fest 2025.
                </p>
              </div>
              <div className="about-image">
                <img src={Crop_Future} alt="Future of Quantum" className="about-img" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="highlights-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Event Highlights</h2>
            <div className="highlights-grid">
              {events.map((event, index) => (
                <AnimatedSection key={index} delay={index * 100} animation="fade-up">
                  <div className="highlight-card">
                    <div className="highlight-icon">{event.icon}</div>
                    <h3 className="highlight-title">{event.title}</h3>
                    <p className="highlight-description">{event.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Partners</h2>
            <div className="partners-grid">
              <div className="partner-card">
                <img src={IBM_Quantum_Logo} alt="IBM Quantum" className="partner-logo" />
                <h3>IBM Quantum</h3>
                <p>Leading quantum computing platform and research</p>
              </div>
              <div className="partner-card">
                <div className="quantumplators-logo">
                  <Users className="logo-icon" />
                  <span>Quantumplators</span>
                </div>
                <h3>Team Quantumplators</h3>
                <p>VIT Chennai's quantum computing enthusiast team</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Event Timeline</h2>
            <div className="timeline">
              {timelineData.map((day, index) => (
                <AnimatedSection key={index} delay={index * 200} animation="fade-left">
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-day">{day.day}</h3>
                      <p className="timeline-date">{day.date}</p>
                      <ul className="timeline-events">
                        {day.events.map((event, eventIndex) => (
                          <li key={eventIndex}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Speakers */}
      <section className="speakers-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Distinguished Speakers</h2>
            <div className="speakers-grid">
              <div className="speaker-placeholder">
                <div className="speaker-image">
                  <img src={Crop_Einstein} alt="Speaker" />
                </div>
                <h3>Dr. Quantum Expert</h3>
                <p>Quantum Computing Researcher</p>
                <p className="speaker-bio">Leading expert in quantum algorithms and applications</p>
              </div>
              <div className="speaker-placeholder">
                <div className="speaker-image">
                  <Star className="placeholder-icon" />
                </div>
                <h3>Industry Pioneer</h3>
                <p>Quantum Solutions Architect</p>
                <p className="speaker-bio">Pioneering quantum computing implementations in industry</p>
              </div>
              <div className="speaker-placeholder">
                <div className="speaker-image">
                  <Star className="placeholder-icon" />
                </div>
                <h3>Research Scientist</h3>
                <p>Quantum Machine Learning</p>
                <p className="speaker-bio">Advancing quantum machine learning research and development</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Venue */}
      <section className="venue-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Venue</h2>
            <div className="venue-content">
              <div className="venue-info">
                <h3>VIT Chennai Campus</h3>
                <p className="venue-address">
                  Vellore Institute of Technology<br />
                  Vandalur-Kelambakkam Road<br />
                  Chennai, Tamil Nadu 600127<br />
                  India
                </p>
                <div className="venue-features">
                  <div className="feature">
                    <MapPin className="feature-icon" />
                    <span>Easy accessibility via public transport</span>
                  </div>
                  <div className="feature">
                    <Users className="feature-icon" />
                    <span>State-of-the-art conference facilities</span>
                  </div>
                </div>
              </div>
              <div className="venue-map">
                <div className="map-placeholder">
                  <MapPin className="map-icon" />
                  <p>Interactive map coming soon</p>
                  <p className="map-coordinates">Lat: 12.8406, Lng: 80.1534</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;