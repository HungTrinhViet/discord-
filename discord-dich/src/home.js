load("config.js");

function execute() {
  var json = bridgeJson("/vbook/home");
  if (!json.ok) return Response.error(json.error || "Bridge error");
  return Response.success(json.data || [], json.next || null);
}
