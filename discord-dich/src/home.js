load("config.js");

function execute() {
  return Response.success([
    {
      title: "Tất cả truyện đã sync",
      input: "/api/home",
      script: "gen.js"
    }
  ]);
}
