let searchInput = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");
let weatherImg = document.querySelector(".weather img");

function getData(city) {
  return new Promise(function (resolve, reject) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6622f69dd513b6f5d8f0a97b94052b56`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

searchbtn.addEventListener("click", () => {
  let city = searchInput.value.trim();
  if (city) {
    getData(city);
    console
      .log(city)
      .then(function (data) {
        console.log("data", data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML =
          Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML =
          data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "%";
        if (data.weather[0].main === "Clouds") {
          weatherImg.src = "images/Cloudly-images/clouds.png ";
        } else if (data.weather[0].main === "Clear") {
          weatherImg.src = "images/Cloudly-images/clear.png";
        } else if (data.weather[0].main === "Rain") {
          weatherImg.src = "images/Cloudly-images/rain.png";
        } else if (data.weather[0].main === "Snow") {
          weatherImg.src = "images/Cloudly-images/snow.png";
        } else if (data.weather[0].main === "Wind") {
          weatherImg.src = "images/Cloudly-images/wind.png";
        } else if (data.weather[0].main === "Mist") {
          weatherImg.src = "images/Cloudly-images/mist.png";
        } else if (data.weather[0].main === "Drizzle") {
          weatherImg.src = "images/Cloudly-images/drizzle.png";
        }

        // You can update other elements with weather data here
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    Swal.fire("Please enter a city name");
  }
});
