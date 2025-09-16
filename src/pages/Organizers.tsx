import React from 'react';
import { Github, Instagram, Linkedin, User } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Organizers: React.FC = () => {
  const organizers = [
    {
      name: "N.Rithika",
      role: "Lead Organizer",
      image: null,
      social: {
        github: "",
        instagram: "",
        linkedin: ""
      }
    },
    {
      name: "Raghav Jain",
      role: "Co-Organizer",
      image: null,
      social: {
        github: "",
        instagram: "",
        linkedin: ""
      }
    },
    {
      name: "Muralikrishnan Mani",
      role: "Co-Organizer",
      image: null,
      social: {
        github: "",
        instagram: "",
        linkedin: ""
      }
    },
    {
      name: "Shriram Narayanan",
      role: "Co-Organizer",
      image: null,
      social: {
        github: "",
        instagram: "",
        linkedin: ""
      }
    },
    {
      name: "Meghna Ravikumar",
      role: "Co-Organizer",
      image: null,
      social: {
        github: "",
        instagram: "",
        linkedin: ""
      }
    },
    {
      name: "Harishankar K Nair",
      role: "Advisory",
      image: null,
      social: {
        github: "",
        instagram: "",
        linkedin: ""
      }
    },
    {
      name: "Aansh Sahni",
      role: "Advisory",
      image: null,
      social: {
        github: "",
        instagram: "",
        linkedin: ""
      }
    }
  ];

  return (
    <div className="organizers-page">
      <section className="organizers-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">Meet the <span className="gradient-text">Organizers</span></h1>
            <p className="page-subtitle">
              The dedicated team behind Qiskit Fall Fest 2025 - Team Quantumplators
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="organizers-grid-section">
        <div className="container">
          <div className="organizers-grid">
            {organizers.map((organizer, index) => (
              <AnimatedSection key={index} delay={index * 100} animation="fade-up">
                <div className="organizer-card">
                  <div className="organizer-photo">
                    {organizer.image ? (
                      <img src={organizer.image} alt={organizer.name} />
                    ) : (
                      <User className="placeholder-icon" />
                    )}
                  </div>
                  <h3 className="organizer-name">{organizer.name}</h3>
                  <p className="organizer-role">{organizer.role}</p>
                  <div className="social-links">
                    <a href={organizer.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                      <Github className="social-icon" />
                    </a>
                    <a href={organizer.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                      <Instagram className="social-icon" />
                    </a>
                    <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                      <Linkedin className="social-icon" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="team-message">
        <div className="container">
          <AnimatedSection>
            <div className="message-card">
              <h2>From Team Quantumplators</h2>
              <p>
                We are a passionate group of quantum computing enthusiasts from VIT Chennai, 
                dedicated to advancing quantum education and research. Our team combines expertise 
                in quantum computing, event management, and community building to create meaningful 
                learning experiences.
              </p>
              <p>
                Together, we're committed to making Qiskit Fall Fest 2025 an unforgettable journey 
                into the quantum realm. Join us as we explore the infinite possibilities of quantum computing!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Organizers;