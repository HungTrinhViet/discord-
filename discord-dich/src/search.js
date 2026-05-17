load("config.js");

function execute(key, page) {
  var json = bridgeJson("/api/search", { key: key || "" });
  if (!json.ok) return Response.error(json.error || "Bridge error");
  var data = (json.data || []).map(function (item) {
    return {
      name: item.name,
      link: item.link,
      url: item.link,
      host: BRIDGE_BASE_URL,
      cover: item.cover || "",
      description: item.description || ""
    };
  });
  return Response.success(data, json.next || null);
}
