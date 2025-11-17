import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>About Us</h2>

      <p style={styles.text}>
        Welcome to our food ordering platform! We aim to provide you with a
        smooth, fast, and delightful online food browsing experience.
      </p>

      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>Who We Are</h3>
        <p style={styles.sectionText}>
          We are passionate developers building modern web applications with
          React.js. This app is inspired by real-world food delivery platforms
          and showcases API integration, routing, reusable components, and clean UI.
        </p>

        <h3 style={styles.sectionTitle}>Our Mission</h3>
        <p style={styles.sectionText}>
          Our mission is to simplify the way users discover and explore restaurants.
          We believe in clean code, seamless UI, and fast performance to deliver
          the best experience possible.
        </p>

        <h3 style={styles.sectionTitle}>Tech Stack</h3>
        <ul style={styles.list}>
          <li>⚛ React.js (Functional Components + Hooks)</li>
          <li>🎨 CSS / Inline Styles</li>
          <li>🌐 Fetch API for backend data</li>
          <li>🚀 Swiggy Live API Integration</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "32px",
  },
  text: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "16px",
    color: "#555",
  },
  card: {
    padding: "30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    background: "#fff",
  },
  sectionTitle: {
    marginTop: "20px",
    fontSize: "22px",
    color: "#222",
  },
  sectionText: {
    marginTop: "10px",
    color: "#555",
    lineHeight: "1.6",
  },
  list: {
    marginTop: "10px",
    lineHeight: "1.8",
    paddingLeft: "20px",
  },
};

export default About;
