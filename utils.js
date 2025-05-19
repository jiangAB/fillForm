function check() {
  document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes('/form') || window.location.pathname.includes('/404')) {
      return;
    }
    if (document.querySelector('._404-title')) {
      // console.log(document.querySelector('._404-title'))
      return;
    }
    var hasVisited = getCookie("visited");
    if (!hasVisited) {
      // 获取当前页面路径并编码
      // var currentPage = encodeURIComponent(window.location.pathname + window.location.search);
      // 跳转到表单页，并将当前页面路径作为参数传递
      // setTimeout(() => {
        // window.location.href = "/form?returnUrl=" + currentPage;
      // }, 1500)
      let lang = getLang()
      if (lang === 'ja') {
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
  let lang = getLang()
  console.log(lang)
  if (lang === 'ja') {
    window.location.href = "/";
  } else {
    window.location.href = `/${lang}`;
  }
  // 获取当前 URL 的查询参数
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);

  // 获取 redirect 参数
  // const redirectUrl = urlParams.get('returnUrl');

  // 如果有 redirect 参数，则跳转
  // if (redirectUrl) {
  //   window.location.href = decodeURIComponent(redirectUrl);
  // } else {
  //   console.warn("没有找到 redirect 参数");
  //   // 可选：跳转到默认页面
  //   // window.location.href = "/";
  // }
}
function filledInForm() {
    // 设置 visited=1; 并让其在 2099-12-31 过期
    const expires = "expires=Fri, 31 Dec 2099 23:59:59 GMT";
    // 设置 cookie
    document.cookie = "visited=1; " + expires + "; path=/";
    formBack()

}

function getLang() {
    // 获取当前URL路径
  const path = window.location.pathname; // 例如 "/en/page2"

  // 分割路径并获取语言代码
  const pathParts = path.split('/').filter(part => part !== '');
  const languageCode = pathParts[0]; // "en"
  if (['zh', 'en'].includes(languageCode)) {
    return languageCode
  } else {
    return 'ja'
  }
}