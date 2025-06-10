/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Alexandrie Grenier",
  title: "Web Designer & Content Creator",
  email: "alex@example.com",
  gitHub: "microsoft",
};

const primaryColor = "#fff";
const accentColor = "#222";

function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: primaryColor,
        color: accentColor,
        minHeight: "100vh",
      }}
    >
      <header style={{ padding: "2rem 0", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>{siteProps.name}</h1>
        <p style={{ margin: 0 }}>{siteProps.title}</p>
      </header>
      <main style={{ maxWidth: 600, margin: "2rem auto", textAlign: "center" }}>
        <p>Hi, I&apos;m {siteProps.name}. I design and create content for the web.</p>
      </main>
      <footer style={{ padding: "2rem 0", textAlign: "center", borderTop: "1px solid #eee" }}>
        <a
          href={`mailto:${siteProps.email}`}
          style={{ margin: "0 1rem", color: accentColor, textDecoration: "none" }}
        >
          Email
        </a>
        <a
          href={`https://github.com/${siteProps.gitHub}`}
          style={{ margin: "0 1rem", color: accentColor, textDecoration: "none" }}
        >
          GitHub
        </a>
        <div style={{ marginTop: "1rem", fontSize: "0.9em", color: "#888" }}>
          &copy; {new Date().getFullYear()} {siteProps.name}
        </div>
      </footer>
    </div>
  );
}

export default App;
