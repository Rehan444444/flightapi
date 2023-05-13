const axios = require('axios');

const API_KEY = 'YOUR_API_KEY'; // Replace with your Skyscanner API key
const ORIGIN = 'NYC'; // Replace with the origin airport code
const DESTINATION = 'LAX'; // Replace with the destination airport code
const CURRENCY = 'USD'; // Replace with the currency code you want to use

async function getFlightPrices() {
  const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/${CURRENCY}/en-US/${ORIGIN}-sky/${DESTINATION}-sky/anytime`;

  try {
    const response = await axios.get(url, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
      },
    });

    const data = response.data;
    const quotes = data.Quotes;

    // Print the flight prices
    console.log(`Flight prices from ${ORIGIN} to ${DESTINATION}:`);
    quotes.forEach((quote) => {
      console.log(`${quote.OutboundLeg.DepartureDate}: ${quote.MinPrice} ${CURRENCY}`);
    });
  } catch (error) {
    console.error(error);
  }
}

getFlightPrices();
