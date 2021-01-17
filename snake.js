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

class Block {
  constructor(col = 0, row = 0) {
    this.col = col;
    this.row = row;
  }

  drawSquare(color = "blue") {
    let x = this.col * blockSize;
    let y = this.row * blockSize;
    context.fillStyle = color;
    context.fillRect(x, y, blockSize, blockSize);
  }

  drawCircle(color = "lime") {
    let centerX = this.col * blockSize + blockSize / 2;
    let centerY = this.row * blockSize + blockSize / 2;
    context.fillStyle = color;
    this.circle(centerX, centerY, blockSize / 2, true);
  }

  circle(x, y, radius, fillCircle = true) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
      context.fill();
    } else {
      context.stroke();
    }
  }

  equal(otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
  }
}

class Apple {
  constructor() {
    this.block = new Block(10, 10);
  }

  draw = function () {
    this.block.drawCircle("LimeGreen");
  };

  move = function () {
    const randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    const randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.block = new Block(randomCol, randomRow);
  };
}

// let sampleBlock = new Block(5, 5);
// sampleBlock.drawCircle();

let apple = new Apple();
apple.move();
apple.draw();
