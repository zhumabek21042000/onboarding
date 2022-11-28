let timer = null;

function next(id) {
  var currentPage = document.getElementById(`page-${id}`);
  var nextPage = document.getElementById(`page-${parseInt(id) + 1}`);
  var currentDots = document.getElementById(`dots-${parseInt(id)}`);
  var nextDots = document.getElementById(`dots-${parseInt(id) + 1}`);

  var couponList = document.getElementById("coupon_list");

  clearTimeout(timer);

  if (nextDots && currentDots) {
    setTimeout(() => {
      nextDots.children[parseInt(id)].classList.add("active");
      currentDots.children[parseInt(id) - 1].classList.remove("active");
      if (parseInt(id) + 1 === 2) {
        couponList.classList.add("coupon_list");
      } else {
        couponList.classList.remove("coupon_list");
      }
    }, 50);
  }
  if (parseInt(id) + 1 === 2) {
    couponList.classList.add("coupon_list");
  } else {
    couponList.classList.remove("coupon_list");
  }

  currentPage.classList.add("hidden");
  nextPage.classList.remove("hidden");
  var prize = document.getElementById("prize");
  if (parseInt(id) === 2) {
    timer = setTimeout(() => {
      prize.classList.remove("hidden");
      prize.previousElementSibling.classList.add("hidden");
    }, 2500);
  } else {
    prize.classList.add("hidden");
    prize.previousElementSibling.classList.remove("hidden");
  }
}

function back(id) {
  var currentPage = document.getElementById(`page-${id}`);
  var previousPage = document.getElementById(`page-${parseInt(id) - 1}`);
  var currentDots = document.getElementById(`dots-${parseInt(id)}`);
  var nextDots = document.getElementById(`dots-${parseInt(id) - 1}`);
  var couponList = document.getElementById("coupon_list");
  
  clearTimeout(timer);
  
  if (nextDots && currentDots) {
    setTimeout(() => {
      nextDots.children[parseInt(id) - 2].classList.add("active");
      currentDots.children[parseInt(id) - 1].classList.remove("active");
      if (parseInt(id) - 1 === 2) {
        couponList.classList.add("coupon_list");
      } else {
        couponList.classList.remove("coupon_list");
      }
    }, 50);
  }

  if (parseInt(id) - 1 === 2) {
    couponList.classList.add("coupon_list");
  } else {
    couponList.classList.remove("coupon_list");
  }

  currentPage.classList.add("hidden");
  previousPage.classList.remove("hidden");
  var prize = document.getElementById("prize");
  if (parseInt(id) - 1 === 3) {
    timer = setTimeout(() => {
      prize.classList.remove("hidden");
      prize.previousElementSibling.classList.add("hidden");
    }, 2500);
  } else {
    prize.classList.add("hidden");
    prize.previousElementSibling.classList.remove("hidden");
  }
}

function skip(id) {
  var currentPage = document.getElementById(`page-${id}`);
  currentPage.classList.add("hidden");

  var lastPage = document.getElementById("page-6");
  lastPage.classList.remove("hidden");
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

function openLink(url) {
  if (window?.Android && typeof window.Android.openInBrowser == "function") {
    Android.openInBrowser(url);
    return;
  } else if (window.webkit && window.webkit.messageHandlers) {
    webkit.messageHandlers.performAction.postMessage({
      action: "openInBrowser",
      data: {
        url: url,
      },
    });
  }
}
