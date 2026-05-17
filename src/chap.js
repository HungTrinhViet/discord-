load("config.js");

function execute(url) {
  var chapterId = String(url || "").trim();
  var json = bridgeJson("/vbook/chap/" + encodeURIComponent(chapterId));
  if (!json.ok) return Response.error(json.error || "Bridge error");
  return Response.success(json.data || "");
}
