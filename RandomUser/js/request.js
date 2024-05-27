// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

const lodertoggle = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};
const getdata = function (resource) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", resource);

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        lodertoggle(true);
      } else if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data.results);
        lodertoggle(false);
      } else if (request.readyState == 4) {
        reject("Error!...");
        lodertoggle(false);
      }
    });
    request.send();
  });
};

//load
reload = () => {
  getdata(API)
    .then((data) => {
        UpdateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
document.addEventListener('DOMContentLoaded',reload)
