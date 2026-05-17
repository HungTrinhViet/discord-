load("config.js");

function execute(input, page) {
  var path = input || "/api/home";
  var json = bridgeJson(path);
  if (!json.ok) return Response.error(json.error || "Bridge error");
  return Response.success(toNovelList(json.data || []), json.next || null);
}
