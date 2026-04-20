
    import { useState } from "react";
import profile from "./assets/kiri.jpeg";

export default function App() {
  const [topic, setTopic] = useState("");
  const [caption, setCaption] = useState("");

  const generateCaption = () => {
    setCaption(`✨ Creative vibes in ${topic}. Creating content that connects & converts 💖`);
  };

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        {/* HERO */}
        <div style={styles.header}>
          <img src={profile} style={styles.image} />

          <div>
            <h1 style={styles.name}>Kushal Adhikari</h1>
            <p style={styles.role}>
              Content Creator • Influencer • Brand Partner
            </p>
            <p style={styles.social}>
              Instagram: @adh.kushal | Email: kushuadhikari2@gmail.com| Messenger: Kushal Adhikari
            </p>
          </div>
        </div>

        {/* STATS */}
        <div style={styles.stats}>
          <div style={styles.box}>
            <h2>50K+</h2>
            <p>Followers</p>
          </div>
          <div style={styles.box}>
            <h2>2M+</h2>
            <p>Views</p>
          </div>
          <div style={styles.box}>
            <h2>12+</h2>
            <p>Brand Deals</p>
          </div>
        </div>

        {/* WORK */}
        <div style={styles.section}>
          <h2>💼 Past Work</h2>
          <ul>
            <li>✔ Service Promotion / Reels / Content</li>
            <li>✔ Product Promotion</li>
            <li>✔ Academic Content</li>
            <li>✔ Product Review Campaigns</li>
          </ul>
        </div>

        {/* WHY ME */}
        <div style={styles.section}>
          <h2>💖 Why Brands Work With Me</h2>
          <p style={styles.text}>
            I create aesthetic, high-engagement content that drives real audience interaction.
            My focus is lifestyle, fashion, travel, and storytelling that converts views into sales.
          </p>
        </div>

        {/* CONTACT */}
        <div style={styles.contactBox}>
          <h2>📩 Hire Me / Work With Me</h2>
          <p>DM me on Instagram,Messenger or email for collaborations</p>
          <p style={styles.smallText}>
            ⚡ Response time: 24–48 hours
          </p>
        </div>

        {/* CAPTION TOOL */}
        <div style={styles.tool}>
          <h2>✨ Caption Generator</h2>

          <input
            placeholder="Enter topic (Product, Service,Fashion,Clothes,Publication...)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={styles.input}
          />

          <button onClick={generateCaption} style={styles.button}>
            Generate
          </button>

          {caption && <p style={styles.caption}>{caption}</p>}
        </div>

      </div>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #a18cd1)",
    padding: 20
  },

  card: {
    width: "100%",
    maxWidth: 650,
    background: "rgba(255,255,255,0.95)",
    borderRadius: 25,
    padding: 30,
    boxShadow: "0 25px 60px rgba(0,0,0,0.25)"
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: 15
  },

  image: {
    width: 95,
    height: 95,
    borderRadius: "50%",
    border: "3px solid #ff69b4"
  },

  name: {
    margin: 0,
    fontSize: 24
  },

  role: {
    color: "#666",
    margin: "5px 0"
  },

  social: {
    fontSize: 12,
    color: "#888"
  },

  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 25
  },

  box: {
    flex: 1,
    margin: 5,
    padding: 15,
    textAlign: "center",
    borderRadius: 15,
    background: "linear-gradient(135deg, #ffe0ec, #e0c3fc)"
  },

  section: {
    marginTop: 25
  },

  text: {
    color: "#555",
    lineHeight: 1.6
  },

  contactBox: {
    marginTop: 30,
    padding: 20,
    borderRadius: 15,
    background: "linear-gradient(135deg, #ffd1dc, #c9a7eb)"
  },

  smallText: {
    fontSize: 12,
    color: "#777"
  },

  tool: {
    textAlign: "center",
    marginTop: 30
  },

  input: {
    padding: 10,
    borderRadius: 10,
    border: "1px solid #ccc"
  },

  button: {
    marginLeft: 10,
    padding: "10px 15px",
    border: "none",
    borderRadius: 10,
    background: "#ff69b4",
    color: "white",
    cursor: "pointer"
  },

  caption: {
    marginTop: 15,
    fontStyle: "italic",
    color: "#444"
  }
};