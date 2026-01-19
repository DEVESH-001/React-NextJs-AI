const { log } = require("node:console");

//clousers:
function subscribe() {
  var name = "devesh";
  function displayName() {
    log(name);
  }
  displayName();
}

subscribe();
