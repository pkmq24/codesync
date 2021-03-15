function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
function unHtml(str) {
  return str
    ? str.replace(/[<">']/g, (a) => {
        return {
          "<": "&lt;",
          '"': "&quot;",
          ">": "&gt;",
          "'": "&#39;",
        }[a];
      })
    : "";
}