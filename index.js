document.addEventListener("DOMContentLoaded", function () {
  // Get the "Order Now" button
  var orderNowButton = document.querySelector(".home-card button");

  // Add a click event listener to the button
  orderNowButton.addEventListener("click", function () {
    // Display an alert when the button is clicked
    alert("Order Now button clicked! Place your order.");
  });
});

function showCountdown() {
  document.getElementById("countdown").style.display = "block";
  document.getElementById("countDownBtn").style.display = "none";
  document.getElementById("enter-btn").style.display = "none";
}

function showCalendar() {
  document.querySelector(".countdown-prompt").style.display = "block";
}

function hideCountdown() {
  document.querySelector(".countdown-prompt").style.display = "none";
  document.getElementById("countDownBtn").style.display = "block";
}

function toggleNavbar() {
  var nvCenter = document.querySelector(".nv-center");
  var nvRight = document.querySelector(".nv-right");
  nvCenter.style.display =
    nvCenter.style.display === "flex" || nvCenter.style.display === ""
      ? "none"
      : "flex";
  nvRight.style.display =
    nvRight.style.display === "flex" || nvRight.style.display === ""
      ? "none"
      : "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  const endDateInput = document.querySelector('input[name="endDate"]');
  const clockContainer = document.querySelector(".clock");
  const daysSpan = document.querySelector(".days");
  const hoursSpan = document.querySelector(".hours");
  const minutesSpan = document.querySelector(".minutes");
  const secondsSpan = document.querySelector(".seconds");

  let timeInterval;
  let stopClock = false;

  // Check local storage for saved countdown date
  const savedEndDate = localStorage.getItem("endDate");
  if (savedEndDate) {
    endDateInput.value = savedEndDate;
    startClock(savedEndDate);
  }

  // Event listener for input change
  endDateInput.addEventListener("change", function () {
    clearInterval(timeInterval);
    localStorage.setItem("endDate", this.value);
    startClock(this.value);
  });

  function startClock(endDate) {
    stopClock = false;
    updateClock(endDate); // Update clock immediately when starting
    timeInterval = setInterval(function () {
      updateClock(endDate);
    }, 1000);
  }

  function updateClock(endDate) {
    const timeLeft = timeUntil(endDate);
    if (stopClock) {
      clearInterval(timeInterval);
    } else {
      daysSpan.textContent = timeLeft.days;
      hoursSpan.textContent = ("0" + timeLeft.hours).slice(-2);
      minutesSpan.textContent = ("0" + timeLeft.minutes).slice(-2);
      secondsSpan.textContent = ("0" + timeLeft.seconds).slice(-2);
    }
  }

  function timeUntil(endDate) {
    const currentTime = new Date().getTime();
    const targetDate = new Date(endDate).getTime();
    let timeLeft = targetDate - currentTime;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var coverImage = document.getElementById("coverimage");

  // Check for CSS animation support
  if (typeof CSS !== "undefined" && CSS.supports("animation", "1s")) {
    coverImage.classList.add("fade-in");
  } else {
    // Fallback for CSS transition
    coverImage.style.opacity = 1;
    coverImage.style.transition = "opacity 0.5s ease";
  }
});
