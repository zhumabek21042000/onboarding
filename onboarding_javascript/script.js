function next(id) {
  var currentPage = document.getElementById(`page-${id}`);
  var nextPage = document.getElementById(`page-${parseInt(id) + 1}`);
  currentPage.classList.add("hidden");
  nextPage.classList.remove("hidden");

  var prize = document.getElementById("prize");

  if (parseInt(id) === 2) {
    setTimeout(() => {
      prize.classList.remove("hidden");
      prize.previousElementSibling.classList.add("hidden");
    }, 3000);
  } else {
    setTimeout(() => {
      prize.classList.add("hidden");
      prize.previousElementSibling.classList.remove("hidden");
    }, 100);
  }
}

function back(id) {
  var currentPage = document.getElementById(`page-${id}`);
  var previousPage = document.getElementById(`page-${parseInt(id) - 1}`);
  currentPage.classList.add("hidden");
  previousPage.classList.remove("hidden");

  var prize = document.getElementById("prize");
  if (parseInt(id) - 1 === 3) {
    setTimeout(() => {
      prize.classList.remove("hidden");
      prize.previousElementSibling.classList.add("hidden");
    }, 3000);
  } else {
    setTimeout(() => {
      prize.classList.add("hidden");
      prize.previousElementSibling.classList.remove("hidden");
    }, 100);
  }
}

function skip(id){
  var currentPage = document.getElementById(`page-${id}`);
  currentPage.classList.add("hidden");

  var lastPage = document.getElementById("page-6");
  lastPage.classList.remove("hidden")
}

function couponsAnimation() {
  $(function () {
    $("#coupon_list").load("../coupon.html");
  });
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