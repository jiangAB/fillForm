function check() {
  document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes('/form') || window.location.pathname.includes('/404')) {
      return;
    }
    var hasVisited = getCookie("visited");
    if (!hasVisited) {
      // 获取当前页面路径并编码
      var currentPage = encodeURIComponent(window.location.pathname + window.location.search);
      // 跳转到表单页，并将当前页面路径作为参数传递
      // setTimeout(() => {
        window.location.href = "/form?returnUrl=" + currentPage;
      // }, 1500)
      // window.location.href = "/form";
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
  // 获取当前 URL 的查询参数
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // 获取 redirect 参数
  const redirectUrl = urlParams.get('returnUrl');

  // 如果有 redirect 参数，则跳转
  if (redirectUrl) {
    window.location.href = decodeURIComponent(redirectUrl);
  } else {
    console.warn("没有找到 redirect 参数");
    // 可选：跳转到默认页面
    // window.location.href = "/";
  }
}
function filledInForm() {
    // 设置 visited=1; 并让其在 2099-12-31 过期
    const expires = "expires=Fri, 31 Dec 2099 23:59:59 GMT";
    // 设置 cookie
    document.cookie = "visited=1; " + expires + "; path=/";
    formBack()

}