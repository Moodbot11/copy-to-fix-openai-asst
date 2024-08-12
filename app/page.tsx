"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

declare global {
  interface Window {
    vapiSDK: any;
  }
}

const Home = () => {
  const [prices, setPrices] = useState({
    expedia: null,
    travelocity: null,
    priceline: null,
    myPrice: null,
  });

  useEffect(() => {
    const fetchPrices = async () => {
      const expediaPrice = await fetchExpediaPrice();
      const travelocityPrice = await fetchTravelocityPrice();
      const pricelinePrice = await fetchPricelinePrice();

      const lowestPrice = Math.min(expediaPrice, travelocityPrice, pricelinePrice);

      const myPrice = (lowestPrice - 5).toFixed(2);

      setPrices({
        expedia: expediaPrice,
        travelocity: travelocityPrice,
        priceline: pricelinePrice,
        myPrice,
      });
    };

    fetchPrices();

    const assistant = "80aecc7e-9537-4240-91e6-642c0c5cb976"; // Substitute with your assistant ID
    const apiKey = "f5c80ab3-a42b-4544-a3a2-ff019e8b7913"; // Substitute with your Public key from Vapi Dashboard.

    const buttonConfig = {
      position: "right",
      offset: "465px",
      width: "480px",
      height: "130px",
      idle: {
        color: `rgb(93, 254, 202)`,
        type: "pill",
        title: "I'm here for you 24 hours a day",
        subtitle: "Talk to me, let's figure it out.",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
      },
      loading: {
        color: `rgb(93, 124, 202)`,
        type: "pill",
        title: "Connecting...",
        subtitle: "Please wait",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
      },
      active: {
        color: `rgb(255, 0, 0)`,
        type: "pill",
        title: "I'm here with you now",
        subtitle: "End the call.",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
      },
    };

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;

    script.onload = () => {
      const vapiInstance = window.vapiSDK.run({
        apiKey: apiKey,
        assistant: assistant,
        config: buttonConfig,
        parentElement: document.getElementById("vapi-widget"),
      });

      vapiInstance.on("speech-start", () => {
        console.log("Speech has started");
      });

      vapiInstance.on("speech-end", () => {
        console.log("Speech has ended");
      });

      vapiInstance.on("call-start", () => {
        console.log("Call has started");
      });

      vapiInstance.on("call-end", () => {
        console.log("Call has stopped");
      });

      vapiInstance.on("volume-level", (volume) => {
        console.log(`Assistant volume level: ${volume}`);
      });

      vapiInstance.on("message", (message) => {
        console.log(message);
      });

      vapiInstance.on("error", (e) => {
        console.error(e);
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const fetchExpediaPrice = async () => {
    return 150.0;
  };

  const fetchTravelocityPrice = async () => {
    return 145.0;
  };

  const fetchPricelinePrice = async () => {
    return 148.0;
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Plan Your Perfect Trip with Our Comprehensive Travel Services</h1>
        <p>From flights to car rentals, we've got you covered. Discover the best deals and travel packages.</p>
      </header>
      
      {/* Original AI-related buttons */}
      <div className={styles.buttonRow}>
        {Object.entries({
          "Voice chat-GPT4o": "basic-chat",
          "Function calling": "function-calling",
          "Knowledge Base": "file-search",
          All: "all",
        }).map(([name, url]) => (
          <a key={name} className={styles.existingCategory} href={`/examples/${url}`}>
            {name}
          </a>
        ))}
      </div>

      {/* New travel-related buttons */}
      <div className={styles.buttonRow}>
        {Object.entries({
          "Car Rentals": "car-rentals",
          "Flights": "flights",
          "Hotels": "hotels",
          "Vacation Packages": "vacation-packages",
          "Cruises": "cruises",
          "Travel Insurance": "travel-insurance",
        }).map(([name, url]) => (
          <a key={name} className={styles.service} href={`/services/${url}`}>
            {name}
          </a>
        ))}
      </div>

      {/* Enhanced Price Comparison Section */}
      <section className={styles.comparisonBox}>
        <h2>Compare Prices</h2>
        <div className={styles.priceRow}>
          <div className={styles.priceSource}>Expedia</div>
          <div className={styles.priceValue}>${prices.expedia}</div>
          <button className={styles.compareButton}>Check Expedia</button>
        </div>
        <div className={styles.priceRow}>
          <div className={styles.priceSource}>Travelocity</div>
          <div className={styles.priceValue}>${prices.travelocity}</div>
          <button className={styles.compareButton}>Check Travelocity</button>
        </div>
        <div className={styles.priceRow}>
          <div className={styles.priceSource}>Priceline</div>
          <div className={styles.priceValue}>${prices.priceline}</div>
          <button className={styles.compareButton}>Check Priceline</button>
        </div>
        <div className={`${styles.priceRow} ${styles.bestPriceRow}`}>
          <div className={styles.priceSource}>Our Price</div>
          <div className={styles.priceValueBest}>${prices.myPrice}</div>
          <button className={styles.bestPriceButton}>Join Now</button>
        </div>
      </section>

      <section className={styles.widgetSection}>
        <div className={styles.widget} id="vapi-widget">
          {/* The Vapi widget will be injected here */}
        </div>
        <div className={styles.center}>
          <h3>Need help? Call us at +1 (310) 776 3204 – We're available 24/7</h3>
        </div>
      </section>
      
      <footer className={styles.footer}>
        <p>&copy; 2024 Generative Solutions. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
