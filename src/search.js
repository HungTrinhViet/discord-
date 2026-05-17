load("config.js");

function execute(key, page) {
  var json = bridgeJson("/vbook/search", { key: key || "" });
  if (!json.ok) return Response.error(json.error || "Bridge error");
  return Response.success(json.data || [], json.next || null);
}
