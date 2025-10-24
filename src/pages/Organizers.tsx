import React from "react";
import { Github, Instagram, Linkedin, User } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import styles from "./Organizers.module.css";
import Rithika from "../assets/organizers/Rithika.jpg";
import Raghav from "../assets/organizers/Raghav.jpg";
import Murali from "../assets/organizers/Murali.jpg";
import Shriram from "../assets/organizers/Shriram.jpg";
import Meghna from "../assets/organizers/Meghna.jpg";
import Kailash from "../assets/organizers/Kailash.jpg";
import Hari from "../assets/organizers/Harishankar.jpg";
import Aansh from "../assets/organizers/Aansh.jpg";
import Ishaan from "../assets/organizers/placeholder.jpg";
import Abhinav from "../assets/organizers/placeholder.jpg";
import Kashish from "../assets/organizers/Kashish.jpg";
import Isshaan from "../assets/organizers/placeholder.jpg";

const Organizers: React.FC = () => {
    const organizers = [
        {
            name: "N.Rithika",
            role: "Lead Organizer",
            image: Rithika,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
        {
            name: "Raghav Jain",
            role: "Co-Organizer",
            image: Raghav,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
        {
            name: "Muralikrishnan Mani",
            role: "Co-Organizer",
            image: Murali,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
        {
            name: "Shriram Narayanan",
            role: "Co-Organizer",
            image: Shriram,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
        {
            name: "Meghna Ravikumar",
            role: "Co-Organizer",
            image: Meghna,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
        {
            name: "Harishankar K Nair",
            role: "Advisory",
            image: Hari,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
        {
            name: "Aansh Sahni",
            role: "Advisory",
            image: Aansh,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
        {
            name: "Kailash",
            role: "Advisory",
            image: Kailash,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
        {
            name: "Kashish",
            role: "Advisory",
            image: Kashish,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
        {
            name: "Isshaan",
            role: "Advisory",
            image: Isshaan,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
        {
            name: "Ishaan Singh",
            role: "Web Developer",
            image: Ishaan,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
        {
            name: "Abhinav",
            role: "Web Developer",
            image: Abhinav,
            social: {
                github: "",
                instagram: "",
                linkedin: "",
            },
        },
    ];

    return (
        <div className={styles.organizersPage}>
            <section className={styles.organizersHero}>
                <div className="container">
                    <AnimatedSection>
                        <h1 className="page-title">
                            Meet the{" "}
                            <span className="gradient-text">Organizers</span>
                        </h1>
                        <p className="page-subtitle">
                            The dedicated team behind Qiskit Fall Fest 2025 -
                            Team Quantumplators
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className={styles.organizersGridSection}>
                <div className="container">
                    <div className={styles.organizersGrid}>
                        {organizers.map((organizer, index) => (
                            <AnimatedSection
                                key={index}
                                delay={index * 100}
                                animation="fade-up"
                            >
                                <div className={styles.organizerCard}>
                                    <div className={styles.organizerPhoto}>
                                        {organizer.image ? (
                                            <img
                                                src={organizer.image}
                                                alt={organizer.name}
                                            />
                                        ) : (
                                            <User
                                                className={
                                                    styles.placeholderIcon
                                                }
                                            />
                                        )}
                                    </div>
                                    <h3 className={styles.organizerName}>
                                        {organizer.name}
                                    </h3>
                                    <p className={styles.organizerRole}>
                                        {organizer.role}
                                    </p>
                                    <div className={styles.socialLinks}>
                                        <a
                                            href={organizer.social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialLink}
                                        >
                                            <Github
                                                className={styles.socialIcon}
                                            />
                                        </a>
                                        <a
                                            href={organizer.social.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialLink}
                                        >
                                            <Instagram
                                                className={styles.socialIcon}
                                            />
                                        </a>
                                        <a
                                            href={organizer.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialLink}
                                        >
                                            <Linkedin
                                                className={styles.socialIcon}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.teamMessage}>
                <div className="container">
                    <AnimatedSection>
                        <div className={styles.messageCard}>
                            <h2>From Team Quantumplators</h2>
                            <p>
                                We are a passionate group of quantum computing
                                enthusiasts from VIT Chennai, dedicated to
                                advancing quantum education and research. Our
                                team combines expertise in quantum computing,
                                event management, and community building to
                                create meaningful learning experiences.
                            </p>
                            <p>
                                Together, we're committed to making Qiskit Fall
                                Fest 2025 an unforgettable journey into the
                                quantum realm. Join us as we explore the
                                infinite possibilities of quantum computing!
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Organizers;
