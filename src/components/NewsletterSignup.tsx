import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgrqjwj";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatus("SUCCESS");
        setEmail("");
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section style={{ background: "#e53e3e", color: "white", padding: 24, textAlign: "center" }}>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            padding: 8,
            borderRadius: 4,
            border: "none",
            marginRight: 8
          }}
          className="text-gray-900 bg-white dark:text-white dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", borderRadius: 4, border: "none", background: "white", color: "#e53e3e", fontWeight: "bold" }}
        >
          Subscribe
        </button>
      </form>
      {status === "SUCCESS" && <p style={{ marginTop: 12, color: "#c6f6d5" }}>Thank you for subscribing!</p>}
      {status === "ERROR" && <p style={{ marginTop: 12, color: "#fed7d7" }}>Something went wrong. Please try again.</p>}
    </section>
  );
};

export default NewsletterSignup;
