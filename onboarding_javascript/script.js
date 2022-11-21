function next(id) {
  var backButton = document.getElementById("back-button");
  var skipButton = document.getElementById("skip-button");
  var nextButton = document.getElementById("next-button");
  var bottomBar = document.getElementById("bottom");
  var dots = document.getElementById("dots");
  if (parseInt(id) === 1) {
    backButton.classList.remove("invisible");
    skipButton.classList.remove("skip");
    skipButton.classList.add("red");
  } else if (parseInt(id) === 5) {
    skipButton.classList.add("invisible");
    nextButton.classList.add("invisible");
    bottomBar.classList.add("invisible");
  }
  nextButton.setAttribute("onclick", `next(${parseInt(id) + 1})`);
  skipButton.setAttribute("onclick", `skip(${parseInt(id) + 1})`);
  backButton.setAttribute("onclick", `back(${parseInt(id) + 1})`);

  var currentPage = document.getElementById(`page-${id}`);
  var nextPage = document.getElementById(`page-${parseInt(id) + 1}`);
  currentPage.classList.add("hidden");
  nextPage.classList.remove("hidden");

  var prize = document.getElementById("prize");

  if (parseInt(id) === 2) {
    setTimeout(() => {
      prize.classList.remove("hidden");
      prize.previousElementSibling.classList.add("hidden");
    }, 2500);
  } else {
    setTimeout(() => {
      prize.classList.add("hidden");
      prize.previousElementSibling.classList.remove("hidden");
    }, 100);
  }
  dots.children[parseInt(id) - 1].classList.remove("active");
  dots.children[parseInt(id)].classList.add("active");
}

function back(id) {
  var backButton = document.getElementById("back-button");
  var skipButton = document.getElementById("skip-button");
  var nextButton = document.getElementById("next-button");
  var bottomBar = document.getElementById("bottom");
  var dots = document.getElementById("dots");

  if (parseInt(id) === 2) {
    backButton.classList.add("invisible");
    skipButton.classList.add("skip");
    skipButton.classList.remove("red");
    backButton.removeAttribute("onclick");
    skipButton.setAttribute("onclick", `skip(${parseInt(id) - 1})`);
  } else if (parseInt(id) === 6) {
    nextButton.classList.remove("invisible");
    bottomBar.classList.remove("invisible");
    skipButton.classList.remove("invisible");
  }
  skipButton.setAttribute("onclick", `skip(${parseInt(id) - 1})`);
  backButton.setAttribute("onclick", `back(${parseInt(id) - 1})`);
  nextButton.setAttribute("onclick", `next(${parseInt(id) - 1})`);
  var currentPage = document.getElementById(`page-${id}`);
  var previousPage = document.getElementById(`page-${parseInt(id) - 1}`);
  currentPage.classList.add("hidden");
  previousPage.classList.remove("hidden");

  var prize = document.getElementById("prize");
  if (parseInt(id) - 1 === 3) {
    setTimeout(() => {
      prize.classList.remove("hidden");
      prize.previousElementSibling.classList.add("hidden");
    }, 2500);
  } else {
    setTimeout(() => {
      prize.classList.add("hidden");
      prize.previousElementSibling.classList.remove("hidden");
    }, 100);
  }
  if (parseInt(id) === 6) {
    dots.children[4].classList.add("active");
  } else {
    dots.children[parseInt(id) - 1].classList.remove("active");
    dots.children[parseInt(id) - 2].classList.add("active");
  }
}

function skip(id) {
  var backButton = document.getElementById("back-button");
  var skipButton = document.getElementById("skip-button");
  var bottomBar = document.getElementById("bottom");
  var currentPage = document.getElementById(`page-${id}`);
  var lastPage = document.getElementById("page-6");
  var dots = document.getElementById("dots");
  dots.children[parseInt(id) - 1].classList.remove("active");
  currentPage.classList.add("hidden");
  lastPage.classList.remove("hidden");
  if (parseInt(id) === 1) {
    backButton.classList.remove("invisible");
    skipButton.classList.remove("skip");
  }

  backButton.setAttribute("onclick", `back(6)`);
  skipButton.classList.add("invisible");
  bottomBar.classList.add("invisible");
}

function openLogin() {
  if (window?.Android && typeof window.Android.openLogin == "function") {
    Android.openLogin();
    return null;
  } else if (window.webkit && window.webkit.messageHandlers) {
    webkit.messageHandlers.performAction.postMessage({
      action: "openLogin",
    });
  }
}

function openRegistration() {
  if (window?.Android && typeof window.Android.openRegistration == "function") {
    Android.openRegistration();
    return null;
  } else if (window.webkit && window.webkit.messageHandlers) {
    webkit.messageHandlers.performAction.postMessage({
      action: "openRegistration",
    });
  }
}
