load("config.js");

function execute(url) {
  var novelKey = extractTail(url);
  var json = bridgeJson("/api/detail/" + encodeURIComponent(novelKey));
  if (!json.ok) return Response.error(json.error || "Bridge error");
  return Response.success(json.data);
}
