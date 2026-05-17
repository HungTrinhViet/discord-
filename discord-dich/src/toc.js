load("config.js");

function execute(url) {
  var novelKey = extractTail(url);
  var json = bridgeJson("/api/toc/" + encodeURIComponent(novelKey));
  if (!json.ok) return Response.error(json.error || "Bridge error");
  var data = (json.data || []).map(function (item) {
    return {
      name: item.name,
      url: sourceChapterUrl(item.url),
      host: BRIDGE_BASE_URL
    };
  });
  return Response.success(data);
}
