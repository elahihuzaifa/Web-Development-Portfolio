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

var carsBrand = {
  bmw: {
    bmwXM: {
      image: "images/bmw_xm_2023.png",
      name: "BMW XM",
      model: "2022",
      fuelType: "petrol",
      bodyType: "SUV",
      seatingCapacity: "7 persons",
      color: ["black", "white"],
      price: "Rs.26,000,000",
    },
    BMW7: {
      image: "images/mansory_bmw_7_series-HD.jpg",
      name: "BMW 7 Series 735i",
      model: "2022",
      fuelType: "petrol",
      bodyType: "Sedan",
      seatingCapacity: "5 persons",
      color: ["black", "white"],
      price: "Rs.3,560,000",
    },
    theZ4: {
      image: "images/2023_bmw_z4_m40i_4k-HD.png",
      name: "The Z4",
      model: "2022",
      fuelType: "petrol",
      bodyType: "Convertible",
      seatingCapacity: "2 persons",
      color: ["black", "white"],
      price: "Rs.26,000,000",
    },
    x5: {
      image: "images/BMW X5.jpg",
      name: "BMW X5",
      model: "2018",
      fuelType: "petrol",
      bodyType: "SUV",
      seatingCapacity: "5 persons",
      color: ["black", "white"],
      price: "Rs.5,500,000",
    },
    i8: {
      image: "images/bmw_i8_roadster_formula_e_safety_car_5k_2-1920x1080.png",
      name: "BMW i8",
      model: "2020",
      fuelType: "hybrid",
      bodyType: "Coupe",
      seatingCapacity: "2 persons",
      color: ["blue", "white"],
      price: "Rs.12,000,000",
    },
    series7: {
      image: "images/bmw_i7_xdrive60_2023_4k_3-1920x1080.png",
      name: "BMW 7 Series",
      model: "2022",
      fuelType: "petrol",
      bodyType: "Sedan",
      seatingCapacity: "5 persons",
      color: ["black", "silver"],
      price: "Rs.6,000,000",
    },
  },
  toyota: {
    camry: {
      image: "images/toyota_camry_hybrid_2019-1920x1080.png",
      name: "Toyota Camry",
      model: "2019",
      fuelType: "petrol",
      bodyType: "Sedan",
      seatingCapacity: "5 persons",
      color: ["silver", "white"],
      price: "Rs.2,500,000",
    },
    rav4: {
      image: "images/toyota_rav4_plug_in_hybrid_gr_sport_2022_5k-1920x1080.png",
      name: "Toyota RAV4",
      model: "2022",
      fuelType: "petrol",
      bodyType: "SUV",
      seatingCapacity: "5 persons",
      color: ["blue", "gray"],
      price: "Rs.3,200,000",
    },
    corolla: {
      image: "images/corrolla (1).png",
      name: "Toyota Corolla",
      model: "2019",
      fuelType: "petrol",
      bodyType: "Sedan",
      seatingCapacity: "5 persons",
      color: ["black", "red"],
      price: "Rs.2,200,000",
    },
    yaris: {
      image: "images/toyota_yaris_hybrid_2020_5k-1920x1080.png",
      name: "Toyota Yaris",
      model: "2015",
      fuelType: "petrol",
      bodyType: "Hatchback",
      seatingCapacity: "5 persons",
      color: ["white", "red"],
      price: "Rs.2,000,000",
    },
    fortuner: {
      image: "images/fortuner.png",
      name: "Toyota Fortuner",
      model: "2018",
      fuelType: "diesel",
      bodyType: "SUV",
      seatingCapacity: "7 persons",
      color: ["black", "gray"],
      price: "Rs.3,800,000",
    },
    hilux: {
      image: "images/toyota_hilux_gr_sport_ii_double_cab_2023_4k-1920x1080.png",
      name: "Toyota Hilux",
      model: "2023",
      fuelType: "diesel",
      bodyType: "Pickup Truck",
      seatingCapacity: "5 persons",
      color: ["white", "silver"],
      price: "Rs.2,600,000",
    },
  },
  honda: {
    civic: {
      image: "images/2022_honda_civic_sedan_touring_4k-1920x1080.png",
      name: "Honda Civic",
      model: "2022",
      fuelType: "petrol",
      bodyType: "Sedan",
      seatingCapacity: "5 persons",
      color: ["blue", "black"],
      price: "Rs.2,800,000",
    },
    crv: {
      image: "images/honda_cr_v_ehev_black_edition_2020_5k-1920x1080.png",
      name: "Honda CR-V",
      model: "2020",
      fuelType: "petrol",
      bodyType: "SUV",
      seatingCapacity: "5 persons",
      color: ["red", "white"],
      price: "Rs.3,500,000",
    },
    accord: {
      image: "images/2017_honda_accord_hybrid-1920x1080.png",
      name: "Honda Accord",
      model: "2017",
      fuelType: "petrol",
      bodyType: "Sedan",
      seatingCapacity: "5 persons",
      color: ["black", "white"],
      price: "Rs.2,900,000",
    },
    city: {
      image: "images/New-Honda-All-City-Image-6 (1).png",
      name: "Honda City",
      model: "2019",
      fuelType: "petrol",
      bodyType: "Sedan",
      seatingCapacity: "5 persons",
      color: ["silver", "red"],
      price: "Rs.2,300,000",
    },
    jazz: {
      image: "images/honda-jazz-rs-2018-cars-road-orange-jazz-honda.png",
      name: "Honda Jazz",
      model: "2020",
      fuelType: "petrol",
      bodyType: "Hatchback",
      seatingCapacity: "5 persons",
      color: ["blue", "white"],
      price: "Rs.2,100,000",
    },
    wrv: {
      image: "images/honda-wrv-honda-wr.png",
      name: "Honda WR-V",
      model: "2018",
      fuelType: "petrol",
      bodyType: "SUV",
      seatingCapacity: "5 persons",
      color: ["orange", "black"],
      price: "Rs.2,400,000",
    },
  },
  suzuki: {
    swift: {
      image: "images/suzuki-swift-image.png",
      name: "Suzuki Swift",
      model: "2020",
      fuelType: "petrol",
      bodyType: "Hatchback",
      seatingCapacity: "5 persons",
      color: ["blue", "white"],
      price: "Rs.1,800,000",
    },
    baleno: {
      image: "images/2022-Maruti-Suzuki-Baleno-design1.png",
      name: "Suzuki Baleno",
      model: "2022",
      fuelType: "petrol",
      bodyType: "Hatchback",
      seatingCapacity: "5 persons",
      color: ["silver", "red"],
      price: "Rs.1,950,000",
    },
    vitara: {
      image: "images/suzuki-vitara-new-kia-niro-2019-wit-hd (1).png",
      name: "Suzuki Vitara",
      model: "2019",
      fuelType: "petrol",
      bodyType: "SUV",
      seatingCapacity: "5 persons",
      color: ["black", "gray"],
      price: "Rs.2,300,000",
    },
    jimny: {
      image: "images/jimny-suzuki-preview.png",
      name: "Suzuki Jimny",
      model: "2018",
      fuelType: "petrol",
      bodyType: "SUV",
      seatingCapacity: "4 persons",
      color: ["green", "white"],
      price: "Rs.2,100,000",
    },
    ciaz: {
      image: "images/2018-Maruti-Suzuki-Ciaz-Front-Motion-Dynamic-2.png",
      name: "Suzuki Ciaz",
      model: "2018",
      fuelType: "petrol",
      bodyType: "Sedan",
      seatingCapacity: "5 persons",
      color: ["black", "silver"],
      price: "Rs.2,150,000",
    },
    ertiga: {
      image: "images/2013_suzuki_iv_4_compact_suv_concept-1920x1080.png",
      name: "Suzuki Ertiga",
      model: "2017",
      fuelType: "petrol",
      bodyType: "MPV",
      seatingCapacity: "7 persons",
      color: ["white", "gray"],
      price: "Rs.1,900,000",
    },
  },
};

var main = document.getElementById("main");
var brand = document.getElementById("brand");
var model = document.getElementById("model");
brand.innerHTML = `<option>Select Brand Names</option>`;
model.innerHTML = `<option>Select Model Names</option>`;

function renderAllCars() {
  for (var key in carsBrand) {
    // console.log(key);
    brand.innerHTML += `<option value='${key}'>${key.toUpperCase()}</option>`;
    for (var key1 in carsBrand[key]) {
      var obj = carsBrand[key][key1];
      var colorDiv = "";
      for (var i = 0; i < obj.color.length; i++) {
        // console.log(obj.color[i]);
        colorDiv += `<div class='${obj.color[i]}'></div>`;
        console.log();
      }
      main.innerHTML += `
      <div class="col-md-3 py-4">
      <div class="card " >
        <img src="${
          obj.image ||
          "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg"
        }" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${key1.toUpperCase()} (${obj.model})</h5>
          <p class="card-text">
            ${obj.bodyType.toUpperCase()}
            </br>
            ${obj.fuelType.toUpperCase()}
            </br>
            ${obj.seatingCapacity.toUpperCase()}
            </br>
          </p>
          <h6>${obj.price}</h6>


          <div class="d-flex gap-2">
          ${colorDiv}
          </div>
        </div>
      </div>
    </div>
      `;
    }
    // carlisy bmw.bmwxm
  }
}
renderAllCars();

function setModel() {
  model.innerHTML = "";
  model.innerHTML = `<option>Select Model Names</option>`;
  console.log(carsBrand[brand.value]);
  for (var key in carsBrand[brand.value]) {
    model.innerHTML += `<option value='${key}'>${key.toUpperCase()}</option>`;
  }
}
var carDetail = document.getElementById("car-detail");
function searchCar() {
  main.style.display = "none";
  carDetail.style.display = "flex";
  var car = carsBrand[brand.value][model.value];

  carDetail.innerHTML = `<div class="card mb-3 card-contain2 ">
  <div class="row g-0">
  <h1 class="fw-bolder text-center" >${brand.value.toUpperCase()}</h1>
    <div class="col-md-8">
    <div class="images-searchs">
      <img
       src="${car.image || "images/car22.jpg"}"
        class="img-fluid rounded-start images-show"
        alt="..."
      />
      </div>
    </div>
    <div class="col-md-4 d-flex align-items-center">
      <div class="card-body">
        <h5 class="card-title">${model.value.toUpperCase()}</h5>
        <p class="card-text">
        ${car.bodyType}
        </br>
        ${car.fuelType}
      </p>
      <h6>${car.price}</h6>

    </div>
      </div>
    </div>
  </div>
</div>`;
}

function clearSearch() {
  carDetail.style.display = "none";
  main.style.display = "flex";
}
