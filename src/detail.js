load("config.js");

function execute(url) {
  var novelKey = String(url || "").trim();
  var json = bridgeJson("/vbook/detail/" + encodeURIComponent(novelKey));
  if (!json.ok) return Response.error(json.error || "Bridge error");
  return Response.success(json.data);
}
