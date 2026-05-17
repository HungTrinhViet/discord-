// Sua BRIDGE_BASE_URL sau khi bridge chay tren PC.
// Voi dien thoai, khong dung 127.0.0.1; hay dung IP LAN hoac IP Tailscale cua PC.
var BRIDGE_BASE_URL = "http://100.96.179.70:8787";
var BRIDGE_READ_TOKEN = "";

function bridgeUrl(path, params) {
  var query = params || {};
  if (BRIDGE_READ_TOKEN) query.token = BRIDGE_READ_TOKEN;
  var parts = [];
  for (var key in query) {
    if (query[key] === undefined || query[key] === null || query[key] === "") continue;
    parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(query[key])));
  }
  return BRIDGE_BASE_URL.replace(/\/+$/, "") + path + (parts.length ? "?" + parts.join("&") : "");
}

function bridgeJson(path, params) {
  var response = fetch(bridgeUrl(path, params));
  return response.json();
}

function toNovelList(items) {
  return (items || []).map(function (item) {
    return {
      name: item.name,
      link: sourceNovelUrl(item.link),
      host: BRIDGE_BASE_URL,
      cover: item.cover || "",
      description: item.description || ""
    };
  });
}

function sourceNovelUrl(novelKey) {
  return BRIDGE_BASE_URL.replace(/\/+$/, "") + "/source/novel/" + encodeURIComponent(String(novelKey || ""));
}

function sourceChapterUrl(chapterId) {
  return BRIDGE_BASE_URL.replace(/\/+$/, "") + "/source/chapter/" + encodeURIComponent(String(chapterId || ""));
}

function extractTail(value) {
  var s = String(value || "").trim();
  var idx = s.lastIndexOf("/");
  return idx >= 0 ? decodeURIComponent(s.substring(idx + 1)) : s;
}
