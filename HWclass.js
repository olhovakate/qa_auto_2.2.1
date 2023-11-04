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

class Button {
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

testButton();
