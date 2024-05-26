timesec = document.getElementById("time-sec");
monthshow = document.getElementById("Month");
years = document.getElementById("year");
var t = setInterval(function () {
  var now = new Date().getDate();

  timesec.innerHTML = now;

  var today = new Date();
  var monthArray = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var monthSet = today.getMonth();

  var monthName = monthArray[monthSet];

  monthshow.innerHTML = monthName;

  var year = today.getFullYear();
  years.innerHTML = year;
});

let searchInput = document.getElementById("searchinput");
let newsCards = document.getElementById("Cards");
let searchedKeyword = document.getElementById("searchedKeyword");

const defaultNews = () => {
  fetch(
    `https://newsdata.io/api/1/news?apikey=pub_44684162928fc1dc6d32dfb71faf99ef9a707&q=pakistan`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Default News", response);
      searchedKeyword.innerHTML = `Showing news for Pakistan`;
      showNews(response);
    })
    .catch((response) => {
      console.log("Error", response);
    });
};

window.onload = defaultNews();

const search = (city) => {
  fetch(
    `https://newsdata.io/api/1/news?apikey=pub_44684162928fc1dc6d32dfb71faf99ef9a707&q=${searchInput.value
      .toLowerCase()
      .replaceAll(" ", "%20")}`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Data", response);
      console.log(searchInput.value.toLowerCase().replaceAll(" ", "%20"));

      searchedKeyword.innerHTML = `Showing news for ${searchInput.value}`;
      showNews(response);
    })
    .catch((response) => {
      console.log("Error", response);
    });
};

let showNews = (data) => {
  if (data.results && Array.isArray(data.results)) {
    const arrNewsItem = {};

    newsCards.innerHTML = "";

    data.results.forEach((newsDetails) => {
      const title = newsDetails.title || "No title provided";
      const imageUrl = newsDetails.image_url || "image/news.png";
      const altImage = "image/news.png";
      const description = newsDetails.description || "No description provided";
      const truncatedTitle = title.slice(0, 120) + "...";
      const truncatedDescription = description.slice(0, 60) + "...";
      const sourceUrl = newsDetails.source_url || "#";

      if (!arrNewsItem[title]) {
        arrNewsItem[title] = true;
        newsCards.innerHTML += `
        <div class="col-md-3 col-sm-6 d-flex py-2">
        <div class="card position-relative" style="width: 18rem;">
        <img src="${imageUrl}" class="card-img-top w-100">
        <div class="card-body X">
        <h5 class="card-title">${truncatedTitle}</h5>
        <p class="card-text">${truncatedDescription}</p>
        <a target= "_blank" href="${sourceUrl}" class="btn btn-danger visitURL">Visit Website</a>
        </div>
        </div>
        </div>`;
      }
    });
  } else {
    newsCards.innerHTML = "<p>No news items found.</p>";
  }
};
