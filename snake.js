const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const blockSize = 10;
const widthInBlocks = width / blockSize;
const heightInBlocks = height / blockSize;
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Lime"];
const directions = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
};

let intervalId;
