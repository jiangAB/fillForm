function check() {
  document.addEventListener("DOMContentLoaded", function () {
    var hasVisited = getCookie("visited");
    if (!hasVisited) {
      // 获取当前页面路径并编码
      var currentPage = encodeURIComponent(window.location.pathname + window.location.search);
      // 跳转到表单页，并将当前页面路径作为参数传递
      window.location.href = "/form?returnUrl=" + currentPage;
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