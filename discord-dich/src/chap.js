load("config.js");

function execute(url) {
  var chapterId = extractTail(url);
  var json = bridgeJson("/api/chap/" + encodeURIComponent(chapterId));
  if (!json.ok) return Response.error(json.error || "Bridge error");
  return Response.success(json.data || "");
}
