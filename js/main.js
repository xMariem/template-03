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

let started = false;

window.onscroll = function () {
  if (window.scrollY >= sectionStats.offsetTop) {
    if (!started) {
      statsNumbers.forEach((num) => {
        startCount(num);
      });
      started = true;
    }
  }
};

function startCount(ele) {
  let goal = ele.dataset.goal;

  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
