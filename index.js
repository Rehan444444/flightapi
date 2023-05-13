const axios = require('axios');

async function getFlightPrices(origin, destination) {
    const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${origin}-sky/${destination}-sky/anytime`;
  
    const response = await axios.get(url, {
      headers: {
        'X-RapidAPI-Key': '0090f2cb03mshf4917b12dc37ca1p1ea73djsne7bdde1f77cc',
    'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
      },
    });
  
    return response.data;
  }

  getFlightPrices('NYC', 'LAX')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });