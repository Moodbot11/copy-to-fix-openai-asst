"use client";

import React from "react";
import styles from "./page.module.css"; // use simple styles for demonstration purposes
import Chat from "../../components/chat";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Chat />
      </div>
    </main>
  );
};
const http = require('https');

const options = {
	method: 'GET',
	hostname: 'compare-flight-prices.p.rapidapi.com',
	port: null,
	path: '/GetPricesAPI/GetPrices.aspx',
	headers: {
		'x-rapidapi-key': '9fbfad16e4mshc8bff8c81c7cdcfp12a178jsnf38a2c8492f2',
		'x-rapidapi-host': 'compare-flight-prices.p.rapidapi.com'
	}
};

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
export default Home;
