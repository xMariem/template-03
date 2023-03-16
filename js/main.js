let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

let el = document.querySelector("#scroller");
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  el.style.width = `${(scrollTop / height) * 100}%`;
});

// function for count stats

let statsNumbers = document.querySelectorAll(".stats .container .box .number");
let sectionStats = document.querySelector(".stats");

let sectionSkills = document.querySelector(".skills");
let skillsNumbers = document.querySelectorAll(".skill h3 span");
let progressBar = document.querySelectorAll(".progress span");

let startedStats = false;
let startedSkills = false;

window.onscroll = function () {
  if (window.scrollY >= sectionSkills.offsetTop - 100) {
    if (!startedStats) {
      skillsNumbers.forEach((num) => {
        startCount(num);
      });

      progressBar.forEach((num) => {
        num.style.width = `${num.dataset.goal}%`;
      });

      startedStats = true;
    }
  }

  if (window.scrollY >= sectionStats.offsetTop - 100) {
    if (!startedSkills) {
      statsNumbers.forEach((num) => {
        startCount(num);
      });
      startedSkills = true;
    }
  }
};

function startCount(ele) {
  let goal = ele.dataset.goal;

  let count = setInterval(() => {
    ele.firstElementChild.textContent++;
    if (ele.firstElementChild.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// count time

let countDownDate = new Date("Mar 21, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  // Get time units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".unite .days").innerHTML = days;
  document.querySelector(".unite .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".unite .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".unite .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval();
  }
}, 1000);
