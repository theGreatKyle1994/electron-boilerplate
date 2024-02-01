// This file is frontend and we're using fs!
const fileList = document.getElementById("file-list");
// Grabbing require and __dirname from the api bridge
const { require, dirname } = window.api;
// Using our custom require method in the frontend!
const fs = require("fs");

// Reading our project directory to get all non-folder file names
fs.readdirSync(dirname).forEach((fileName) => {
  const newListItem = document.createElement("li");
  newListItem.innerText = fileName;
  fileList.appendChild(newListItem);
});
