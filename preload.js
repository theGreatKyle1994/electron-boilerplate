const { contextBridge } = require("electron");

// Creating the custom api for bridging to the frontend
const api = {
  // This allows us to use require anywhere we want
  require: (module) => require(module),
  dirname: __dirname,
};
// Exposing our api to the frontend: "main world"
contextBridge.exposeInMainWorld("api", api);
