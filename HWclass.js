/*class Button {
  constructor(color, type, widht, height) {
    this.color = color;
    this.type = type;
    this.width = widht;
    this.height = height;
  }
  onClick() {
    console.log(`onClick ${this.type}`);
  }
}
function testButton() {
  let myNewButton = new Button("green", "button", "100", "50");
  console.log(myNewButton);
}

testButton();*/

/*class Button {
  constructor(width, height) {
    this.props = {
      type: "button",
      color: "green",
      width,
      height,
    };
  }

  onClick() {
    console.log(this.props);
  }
}
function testButton() {
  const button = new Button(100, 50);
  console.log(button.props);
  button.onClick();
}

testButton();*/

class Button {
  constructor(color = "green", type = "button", width = 100, height = 50) {
    this.color = color;
    this.type = type;
    this.width = width;
    this.height = height;
  }
  onClick() {
    const exampleButton = `Color:${this.color},Type:${this.type},Width:${this.width},Height:${this.height}`;
    console.log(exampleButton);
  }
}
function testButton(anyButton) {
  let defaultButton = new Button();

  if (
    anyButton.color === defaultButton.color &&
    anyButton.type === defaultButton.type &&
    anyButton.width === defaultButton.width &&
    anyButton.height === defaultButton.height
  ) {
    console.log("test passed");
  } else {
    console.log("test failed");
  }
}
let button1 = new Button("green", "button", 100, 50);
let button2 = new Button("blue", "submit", 120, 60);

testButton(button1);
testButton(button2);
