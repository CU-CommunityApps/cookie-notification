// --- Config --- //
//var purecookieTitle   = "Cookies."; // Title
//var purecookieDesc    = "We use cookies to give you the best experience and to help improve our website. <a href="cookie-policy.html" target="_blank">How we use cookies.</a>";
//var purecookieLink    = '<a href="cookie-policy.html" target="_blank">Read our Cookie Policy</a>'; // link
var purecookieButton = "Thanks for letting me know"; // Button text
// ---        --- //


function pureFadeIn(elem, display) {
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};
function pureFadeOut(elem) {
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

function cookieConsent() {
  if (!getCookie('purecookieDismiss')) {
    var cookieDiv = document.createElement('div');
    cookieDiv.id = 'menu';
    cookieDiv.innerHTML = '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieDesc"><p>At Cornell we value your privacy. To view <br />our university\'s privacy practices, including <br />information use and third parties, visit <br /><a href="https://privacy.cornell.edu/information-use-cornell">University Privacy</a>.</p></div><button class="cookieButton" onClick="purecookieDismiss();">' + purecookieButton + '</button></div>';
    document.body.appendChild(cookieDiv);
    pureFadeIn("cookieConsentContainer");
  }
}

function purecookieDismiss() {
  setCookie('purecookieDismiss', '1', 7);
  pureFadeOut("cookieConsentContainer");
}

window.onload = function () {
  cookieConsent();
  //eraseCookie('purecookieDismiss'); // swap-in eraseCookie() to reset

};