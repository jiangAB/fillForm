function check() {
  document.addEventListener("DOMContentLoaded", function () {
    if (
      window.location.pathname.includes("/form") ||
      window.location.pathname.includes("/404")
    ) {
      return;
    }
    if (document.querySelector("._404-title")) {
      return;
    }
    var hasVisited = getCookie("visited");
    if (!hasVisited) {
      let lang = getLang();
      if (lang === "ja") {
        window.location.href = "/form";
      } else {
        window.location.href = `/${lang}/form`;
      }
    }
  });
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function formBack() {
  let lang = getLang();
  console.log(lang);
  let href = "/";
  if (lang === "ja") {
    href = "/";
  } else {
    href = `/${lang}`;
  }
  setTimeout(() => {
    window.location.href = href;
  }, 3000);
}
function filledInForm() {
  const expires = "expires=Fri, 31 Dec 2099 23:59:59 GMT";
  document.cookie = "visited=1; " + expires + "; path=/";
  formBack();
}

function getLang() {
  const path = window.location.pathname;
  const pathParts = path.split("/").filter((part) => part !== "");
  const languageCode = pathParts[0];
  if (["zh", "en"].includes(languageCode)) {
    return languageCode;
  } else {
    return "ja";
  }
}
