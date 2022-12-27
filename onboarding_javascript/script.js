let timer = null;

const userlang = navigator.language || navigator.userLanguage;
const locale = userlang.substring(0, 2);

const translations = {
  "en": {
    "back-title": "Back",
    "skip-title": "Skip",
    "next-title": "Continue",
    "page-1-title": "Welcome to enjoyyit",
    "page-1-subtitle": "Here you can save money easily!",
    "page-2-title": "Discover great offers!",
    "page-2-subtitle": "Collect enjoyyits and exchange them for coupons",
    "page-3-title": "Win with our games!",
    "page-3-subtitle": "Coupons, vouchers and many more specials",
    "page-4-title": "Loyalty is rewarded!",
    "page-4-subtitle": "Show your enjoyyit ID and get loyalty points",
    "page-5-title": "Loyal customer love",
    "page-5-subtitle": "Exchange loyalty points for exclusive offers",
    "page-6-title": "Let's go!",
    "page-6-title-1": "By registering or logging in I accept the",
    "page-6-title-2": "and",
    "page-6-title-3": "of enjoyyit.",
    "you-won-title": "YOU WON!!!",
    "prize-title": "You have won a prize!",
    "login-title": "Log in",
    "register-title": "Register",
    "pp-title": "privacy policy",
    "tac-title": "terms of use",
    "expires-title": "Expires",
    "days-title": "Days",
    "type-1-title": "Lounge & Bar",
    "type-2-title": "Sports & Health",
    "type-3-title": "Leisure & Culture",
    "type-4-title": "Eats & Drinks",
    "try-it-title": "Try it!"
  },

  "de": {
    "back-title": "Zurück",
    "skip-title": "Skip  ",
    "next-title": "Weiter",
    "page-1-title": "Willkommen bei enjoyyit",
    "page-1-subtitle": "Hier kannst du einfach sparen!",
    "page-2-title": "Entdecke tolle Angebote!",
    "page-2-subtitle": "Sammle enjoyyits und tausch sie gegen Coupons",
    "page-3-title": "Gewinne mit unseren Spielen!",
    "page-3-subtitle": "Coupons, Gutscheine und viele weiter Specials",
    "page-4-title": "Treue wird belohnt!",
    "page-4-subtitle": "Zeig deine enjoyyit ID und erhalte Treuepunkte",
    "page-5-title": "Stammkundenliebe",
    "page-5-subtitle": "Tausche Treuepunkte gegen tolle Angebote",
    "page-6-title": "Los geht's!",
    "page-6-title-1": "Mit der Registrierung oder dem Login akzeptiere ich die ",
    "page-6-title-2": "und",
    "page-6-title-3": "von enjoyyit.",
    "you-won-title": "DU HAST GEWONNEN!!!",
    "prize-title": "Hier ist dein Preis",
    "login-title": "Einloggen",
    "register-title": "Registrieren",
    "pp-title": "Datenschutzerklärung ",
    "tac-title": "Nutzungsbedingungen ",
    "expires-title": "Läuft ab",
    "days-title": "Tage",
    "type-1-title": "Lounge & Bar",
    "type-2-title": "Sport & Gesundheit",
    "type-3-title": "Freizeit & Kultur",
    "type-4-title": "Essen & Trinken",
    "try-it-title": "Versuchen Sie es!"
  },
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-i18n-key]").forEach(translateElement);
});

function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[locale][key];
  element.innerText = translation;
}

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

  var lastPage = document.getElementById("page-5");
  lastPage.classList.remove("hidden");
}

function openDiscovery() {
  if (window?.Android && typeof window.Android.openDiscovery == "function") {
    Android.openDiscovery();
    return;
  } else if (window.webkit && window.webkit.messageHandlers) {
    webkit.messageHandlers.performAction.postMessage({
      action: "openDiscovery"
    });
  }
}
