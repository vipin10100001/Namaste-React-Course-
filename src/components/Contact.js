import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>

      <p style={styles.subtitle}>
        Have questions or need support? We're here to help!
      </p>

      <div style={styles.card}>
        <form style={styles.form}>
          <label style={styles.label}>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            style={styles.input}
          />

          <label style={styles.label}>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />

          <label style={styles.label}>Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "28px",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "16px",
    color: "#555",
  },
  card: {
    padding: "25px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    background: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "6px",
    fontSize: "14px",
    color: "#333",
  },
  input: {
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "none",
  },
  button: {
    padding: "12px",
    background: "black",
    color: "white",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Contact;
