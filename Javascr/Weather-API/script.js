function abc() {
    let pickCityName = document.getElementById("city1").value;
  
    axios.get(`https://api.weatherapi.com/v1/current.json?key=51c0e6cc2c81452ca3e52700250804&q=${pickCityName}&aqi=yes`)
      .then(function (response) {
        document.getElementById("res").innerHTML =
          `Today Temp of ${pickCityName} is ${response.data.current.temp_c}°C`;
      })
      .catch(function (error) {
        console.log(error);
        document.getElementById("res").innerHTML =
          `City not found. Please try again.`;
      });
  }
  