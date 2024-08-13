"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

declare global {
  interface Window {
    idecide: any;
  }
}

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();    


    const script = document.createElement("script");
    script.src = "https://myidecide.net/XVI8RE";
    script.defer = true;
    script.async = true;

 
        console.log("Call has stopped");
      });

      

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
