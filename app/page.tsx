"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

https://myidecide.net/XVI8RE

<div class="iDecide_iframe"><iframe src="https://myidecide.net/XVI8RE" height="720" width="1280" 
style="border:0px;"></iframe></div><style>.iDecide_iframe{position:relative;padding-bottom:56.25%;height:0;overflow: 
hidden;max-width:100%;}.iDecide_iframe iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style> no

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
