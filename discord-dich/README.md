# Discord Dich Vbook Plugin

Private Vbook source plugin for reading translated chapters from `vbook-discord-bridge`.

Before installing on your phone, edit:

```text
src/config.js
```

Set:

```js
var BRIDGE_BASE_URL = "http://YOUR_PC_IP_OR_TAILSCALE_IP:8787";
var BRIDGE_READ_TOKEN = "YOUR_READ_TOKEN_FROM_.env";
```

Do not commit your real `BRIDGE_READ_TOKEN` to a public repository.
